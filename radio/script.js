$(document).ready(function() {
    $('head').append('<link href="https://u.nya.is/mzrdtf.png" rel="shortcut icon" type="image/x-icon" />');

    $.getJSON("https://ptb.discordapp.com/api/guilds/264370940706553857/widget.json", function(result) {

        for(i=0; i < result.channels.length; i++){
            if(result.channels[i].position === 0){
                var serverNum = result.channels[i].name.replace(":", "");
            } else if (result.channels[i].position === 1){
                var usersNum = result.channels[i].name.replace(":", "");
            } else if(result.channels[i].position === 2){
                var channelsNum = result.channels[i].name.replace(":", "");
            }
        }

        $('.statsServersNum').text(serverNum);
        $('.statsUsersNum').text(usersNum);
        $('.statsChannelsNum').text(channelsNum);

        console.log("[x] Data success. ")
    });

    $('.topBar-GetBaron').on('click', function() {
        window.open("https://nentin.eu", '_self');
    });


    $('.topBar-Donate').on('click', function() {
        window.open("https://www.tipeeestream.com/nica-mihai/donation", '_blank');
    });

    $(".topBar2-Bug").click(function() {
        $('html, body').animate({
            scrollTop: $("#Bug").offset().top
        }, 2000);
    });

    $(".topBar2-Commands").click(function() {
        $('html, body').animate({
            scrollTop: $("#commands").offset().top
        }, 2000);
    });

    $(".topBar2-Features").click(function() {
        window.open("https://nentin.eu/radio", '_self');
    });

    $(".topBar2-About").click(function() {
        window.open("https://nentin.eu/radiomanele", '_self');
    });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}