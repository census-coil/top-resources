function touching(div1, div2) { 
  var div1_top = div1.offset().top;
  var div2_top = div2.offset().top;

  var div1_bottom = div1_top + div1.height();
  var div2_bottom = div2_top + div2.height();

  if (div1_bottom >= div2_top && div1_top < div2_bottom) {
    return true;
  }
  return false;
}
function currentSection(section, string) {
  if (touching(section, $("#playbook-nav"))){
      $( "#playbook-nav > li > a > div" ).removeClass( "current-circle" );
      $('a[href="'+string+'"] > div').addClass( "current-circle" );
  }
}

function currentSectionMobile(section, string) {
  if (touching(section, $("#mobile-playbook-nav"))){
      $('#playbook-mobile-nav-top-text').text(string);
  }
}

$("#playbook-mobile-nav-top").click(function(){
  if($( "#playbook-mobile-nav-top i" ).hasClass( "fa-caret-up" )){
    $('#playbook-mobile-nav-top i').addClass("fa-caret-down");
    $('#playbook-mobile-nav-top i').removeClass("fa-caret-up");
    $('#mobile-playbook-nav ul').show();
  }
  else{
    $('#playbook-mobile-nav-top i').addClass("fa-caret-up");
    $('#playbook-mobile-nav-top i').removeClass("fa-caret-down");    
    $('#mobile-playbook-nav ul').hide();
  }
})

$("#mobile-playbook-nav a").click(function(){
    $('#mobile-playbook-nav ul').hide();
})


function setNav(){
    currentSection($("#intro"), "#intro");
    currentSection($("#01"), "#01");
    currentSection($("#02"), "#02");
    currentSection($("#03"), "#03");
    currentSection($("#04"), "#04");
    currentSection($("#05"), "#05");
    currentSection($("#06"), "#06");
    currentSection($("#section-07"), "#section-07");
    currentSectionMobile($("#intro"), "Introduction");
    currentSectionMobile($("#01"), "01 - Choose a Problem to Solve");
    currentSectionMobile($("#02"), "02 - Form a Team");
    currentSectionMobile($("#03"), "03 - Conduct User Research");
    currentSectionMobile($("#04"), "04 - Explore Data");
    currentSectionMobile($("#05"), "05 - Design & Build a Product");
    currentSectionMobile($("#06"), "06 - Share with End Users & Stakeholders");
    currentSectionMobile($("#section-07"), "07 - Keep Improving, Share Metrics & Feedback");
}

$(document).ready(function(){
  setNav();
  $(window).scroll(function() {
      setNav();
    });
});