$('#dialog-overlay').hide();

$(document).ready(function () { 

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        interval = setInterval(run, 10);
        timer();
        currentLevel++;
        loadLevel(currentLevel);
        return false;
    });

    $(window).resize(function () {
        if (!$('#dialog-box').is(':hidden')) {
            popup();
        }
    });
});

function popupDialog(message) {
    var sHeight = $(document).height();
    var sWidth = $(window).width();

    var dialogTop =  (sHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (sWidth/2) - ($('#dialog-box').width()/2);

    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    $('#dialog-message').html(message);
}