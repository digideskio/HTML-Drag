var main = function() {
    
    $('p').draggable({
        appendTo: "body",
        start: stopScroll,
        stop: function(ev, ui) {
            $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
            }
    });
    
    $('.pdf').droppable()
    
    $('.dropdown-toggle').click(function (event) {
        event.stopPropagation();
        $('.dropdown-toggle').dropdown();
        
    });
    
    $('.AmerDrop').click(function() {
        var curSheet = $('.current');
        var nextSheet = $('.Amer');
        
        if (curSheet!==nextSheet) {
            curSheet.fadeOut(600).removeClass('current');
            nextSheet.fadeIn(600).addClass('current');
        }
        
    });
    
    $('.EuroDrop').click(function() {
        var curSheet = $('.current');
        var nextSheet = $('.Euro');
        
        if (curSheet!==nextSheet) {
            curSheet.fadeOut(600).removeClass('current');
            nextSheet.fadeIn(600).addClass('current');
        }
        
    });
    
    $('.pdf').click(function() {
        var curSheet = $('.current');
        var nextSheet = curSheet.next();
        
        if (nextSheet.length === 0) {
            nextSheet = $('.pdf').first();
        };
        
        curSheet.fadeOut(600).removeClass('current');
        nextSheet.fadeIn(600).addClass('current');
        
    });
    
};

    function stopScroll() {

        $('.scrollBox').css({
            overflow: 'visible',
        });
    };

    function startScroll() {
        $('.scrollBox').css({
            overflow: 'auto',
        });
    };

$(document).ready(main);

