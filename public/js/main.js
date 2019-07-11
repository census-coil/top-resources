$(document).ready(function(){

    // Mobile breakpoints
    $('#action-links-mobile').slick({
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }),
    $('#in-the-media-links-mobile').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    progressBarSetup();
    matrixAccordion();
});




// Progress Bar Setup
function progressBarSetup(){
    var activeWeek = -1;
    var publicSpreadsheetUrl= "https://docs.google.com/spreadsheets/d/11b6Zm5Pl4AnnAQMHn7yrvyrsDmojHRzsgPYeLrJR90c/pubhtml";

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

        for (var i = 1; i<13; i++) {
            progressBar.addStep("Week "+(i));
            // var currentStep = progressBar.getStep(i);
            // currentStep.onClick = onClick;
            // currentStep.beforeEntry = beforeEntry;
            // currentStep.afterEntry = afterEntry;
            // currentStep.beforeExit = beforeExit;
            // currentStep.afterExit = afterExit;
        }

        progressBar.refreshLayout();
        progressBar.setCurrentStep(activeWeek);
    }

    init();


    function beforeEntry(){

    }

    function afterEntry(){

    }

    function beforeExit(){

    }

    function afterExit(){

    }

    function onClick(){

    }
}


// Code for matrix accordion in the "Meet the Cohort" section
function matrixAccordion(){
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

    var accordionBackendUrl = "https://docs.google.com/spreadsheets/d/1eRPECxenheM2PjDvj5lNOboW9I8okZMvNdAYOuGBzso/pubhtml";
    var problemLabels = ["opp-zones", "pathways", "talent", "entrepreneurship"];
    var roles = ["tech", "ua", "product"];

    function init() {
        Tabletop.init( { key: accordionBackendUrl,
            callback: loadProblemStatements,
            simpleSheet: true } )
    }

    function loadProblemStatements(data, tabletop) {
        problemStatements = {}

        problemLabels.forEach(function(label, i){
            psContents = {}
            roles.forEach(function(l){psContents[l]=[];});
            psContents["index"] = i;
            problemStatements[label] = psContents;
        });

        console.log(problemStatements);
        data.forEach( function(d){
            if (d["name"] != "") {
                problemStatements[d["problem-statement"]][d["role"]].push([d["name"],d["link-to-logo-img"]]);
            }
        });

        problemLabels.forEach( function(ps){
            index = problemStatements[ps]["index"];
            psIdPrefix = "accordion-" + index + "-";

            roles.forEach(function(role) {
                roleHTML = "";
                problemStatements[ps][role].forEach( function(participant){
                    roleHTML += participant[0]+"<br>";
                });
                $("#" + psIdPrefix + role).html(roleHTML);
            });
        });
    }

    init();
}