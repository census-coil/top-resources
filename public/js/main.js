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





    // Progress Bar Setup

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


    var progressDiv = $("#weekly-summaries-progress");
    var progressBar = progressDiv.progressStep();

    progressBar.addVisitedStep("Week 1");
    for (var i = 1; i<13; i++) {
        progressBar.addStep("Week "+(i+1));
        var currentStep = progressBar.getStep(i);
            // currentStep.onClick = onClick;
            // currentStep.beforeEntry = beforeEntry;
            // currentStep.afterEntry = afterEntry;
            // currentStep.beforeExit = beforeExit;
            // currentStep.afterExit = afterExit;
    }

    progressBar.refreshLayout();
    progressBar.setCurrentStep(1);


    //Matrix accordion (vertical)
    var acc = document.getElementsByClassName("matrix-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("matrix-active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }



    $(function() {
        $('.accordion-info').first().show().animate({width: '80%'});
        $('.accordion-item').click(function () {
            var itemID = this.id;
            console.log(this);
            if (itemID != $(".active-accordion-item") || itemID == undefined) {
                "use strict";
                itemID = itemID == undefined ? "accordion-item-1" : this.id;
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
    });
});