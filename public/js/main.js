// Progress Bar Setup
function progressBarSetup(publicSpreadsheetUrl){
    var activeWeek = -1;

    function init() {
        Tabletop.init( { key: publicSpreadsheetUrl,
            callback: loadTable,
            simpleSheet: true } )
    }

    function loadTable(data, tabletop) {
        maxMilestones = 5;
        tableContents = {}
        data.forEach( function(d){
            milestones = {};
            for (var i=1; i < maxMilestones; i++) {
                milestones[d["milestone-" + i + "-name"]] = d["milestone-" + i + "-description"] ;
            }
            milestones[""] == "";
            delete milestones[""];
            d.milestones = milestones;
            tableContents[parseInt(d["week-number"])] = d;
        });

        tableHTML = "";
        Object.keys(tableContents).sort().reverse().forEach(function(weekNumber){
            week = tableContents[weekNumber];
            if (week["is-active"] == "TRUE") {
                activeWeek = weekNumber;
            }

            tableHTML += '<tr ';
            tableHTML += week["is-active"] == "TRUE" ? 'class="active-week"' : "";
            tableHTML += '><td class="weekly-summaries-date">'
                + week['week-dates']
                + '&rarr;<br>Week '
                + week['week-number']
                + '</td><td>';
            tableHTML += week["is-active"] == "TRUE" ?  '<h4><div class="blinking-circle"></div>This Week</h4>' : '';
            tableHTML += '<ul>';

            Object.keys(week['milestones']).forEach( function(m){
                tableHTML +=
                    '<li><strong>'
                    + m
                    + '</strong><br>'
                    + week.milestones[m]
                    + '</li>';
            })
        });
        tableHTML += '</ul></td></tr>';

        $("#weekly-summaries-tbody").html(tableHTML);



        var progressDiv = $("#weekly-summaries-progress");
        var progressBar = progressDiv.progressStep();


        for (var i = 0; i<activeWeek; i++){
            progressBar.addVisitedStep("Week " + i);
        }

        for (var i = activeWeek; i<13; i++) {
            progressBar.addStep("Week "+(i));
        }

        progressBar.refreshLayout();
        progressBar.setCurrentStep(activeWeek);
    }

    init();
}


// Code for matrix accordion in the "Meet the Cohort" section
// Accordion Backend Url is the specially formatted url to the Google Sheet with the participant info
// Problem Labels is an ordered list of the problem statements descriptors we use in that spreadsheet (first column)
// these labels must be an exact match with what is in the Google Doc
function matrixAccordion(accordionBackendUrl, problemLabels){

    var roles = ["tech", "ua", "product"];

    // Show, hide and slide for matrix interaction
    $('.accordion-info').first().show().animate({width: '80%'});
    $('.accordion-item').click(function () {
        var itemID = this.id;
        if (itemID != $(".active-accordion-item") || itemID == undefined) {
            "use strict";
            itemID = itemID == undefined ? "accordion-item-0" : this.id;
            $(".accordion-item").removeClass("active-accordion-item");
            $("#" + itemID).addClass("active-accordion-item");
            $(this).next()
                .show()
                .animate({width: '80%'})
                .animate({opacity: 1})
                .siblings(".accordion-info")
                .animate({opacity: 0, width: '0%'});
        };
    });

    //Fullscreen mode
    $('#matrix-expand').click(function(e){
        $('#matrix-horizontal-accordion').toggleClass('fullscreen');
        $('.accordion-info').toggleClass('fullscreen');
        $('.accordion-item').toggleClass('fullscreen');
        $('.accordion-title').toggleClass('fullscreen');
    });

    // Close fullscreen mode
    $('#matrix-close').click(function(e){
        $('#matrix-horizontal-accordion').toggleClass('fullscreen');
        $('.accordion-info').toggleClass('fullscreen');
        $('.accordion-item').toggleClass('fullscreen');
        $('.accordion-title').toggleClass('fullscreen');
    });


    function init() {
        Tabletop.init( { key: accordionBackendUrl,
            callback: loadProblemStatements,
            simpleSheet: true } )
    }

    // Transform a participant into HTML
    function getParticipantHTML(participant){
        participantHTML = '<div class="accordion-participant">';
        participantHTML += participant.url == "" ? "" : "<a href='" + participant.url + "'>";
        participantHTML += participant.imgpath != "" ?
            '<img class="accordion-participant-img" src="' + participant.imgpath + '" name="' + participant.name + '">'
            : participant.name;
        participantHTML += participant.url == "" ? "</div>" : "</a></div>";
        return participantHTML;
    }

    // Process and validate data, and create HTML for contents
    function loadProblemStatements(data, tabletop) {
        problemStatements = {};
        allParticipants = {};

        // Set up data structure
        problemLabels.forEach(function(label, i){
            psContents = {}
            roles.forEach( function(l) {
                psContents[l]=[];
                allParticipants[l] = [];
            });
            psContents["index"] = i;
            problemStatements[label] = psContents;
        });

        // Reformat data into something more structured and load
        data.forEach( function(d){
            if (d["name"] != "" && d["problem-statement"] != "") {
                participant = {}
                participant.name = d["name"];
                participant.imgpath = d["link-to-logo-img"];
                participant.url = d["link-to-website"];
                problemStatements[d["problem-statement"]][d["role"]].push(participant);

                // Add to master list of participants if not already present, some names are duplicated
                allParticipants[d["role"]].findIndex(x => x.name==d["name"]) === -1 ? allParticipants[d["role"]].push(participant) : console.log("already exists");
            }
        });


        // All participants content
        roles.forEach(function(role) {
            roleHTML = "";
            if (role == "tech") {
                roleHTML += allParticipants[role].map(getParticipantHTML).join("");
            }
            $("#matrix-" + role).html(roleHTML);
        });


        problemLabels.forEach( function(ps){
            console.log(ps);
            index = problemStatements[ps]["index"];
            psIdPrefix = "#accordion-" + index + "-";

            roles.forEach(function(role) {
                roleHTML = "";
                if (role == "tech") {
                    roleHTML += problemStatements[ps][role].map(getParticipantHTML).join("");
                } else {
                    roleHTML += problemStatements[ps][role].map(function(participant){ return participant.name; }).join("<br>");
                }
                $(psIdPrefix + role).html(roleHTML);

                if (problemStatements[ps][role].length == 0){
                    $(psIdPrefix + role + "-header").hide();
                }
            });
        });
    }

    init();
}