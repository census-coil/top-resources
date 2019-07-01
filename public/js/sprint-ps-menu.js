// Update display to reflect the selected year
function psToggle(problemSet) {
    $(".yr-btn").removeClass("yr-btn-active");
    $(".ps").removeClass("ps-active");

    $("#yr-btn-" + problemSet).addClass("yr-btn-active");
    $(".ps-" + problemSet).addClass("ps-active");
}