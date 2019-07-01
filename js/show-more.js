function showMore() {
    $('#see-more-scenarios').hide();
	$( ".hidden" ).toggle();
 	$.scrollify.update();
 }

$(document).ready(function(){
$( ".read-more-trigger" ).click(function() {
 	$.scrollify.update();
 })
});

function showMoreData() {
    $('#see-more-data').hide();
	$( ".data-hidden" ).toggle();
 	$.scrollify.update();
}

$(document).ready(function(){
$( ".usa-accordion-button" ).click(function() {
 	$.scrollify.update();
 })
});
