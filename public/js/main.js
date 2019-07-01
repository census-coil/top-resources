$(document).ready(function(){
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
    var progressDiv = $("#weekly-summaries-progress");
    var progressBar = progressDiv.progressStep();

    progressBar.addStep("Week 1");
    progressBar.addStep("Week 2");
    progressBar.addStep("Week 3");
    progressBar.addStep("Week 4");
    progressBar.addStep("Week 5");
    progressBar.addStep("Week 6");
    progressBar.addStep("Week 7");
    progressBar.addStep("Week 8");
    progressBar.addStep("Week 9");
    progressBar.addStep("Week 10");
    progressBar.addStep("Week 11");
    progressBar.addStep("Week 12");
    progressBar.refreshLayout();
    progressBar.setCurrentStep(0);
    console.log(progressDiv)
});