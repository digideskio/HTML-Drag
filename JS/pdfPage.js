var main = function() {
 
    // Make the PDF size change to match the screen resolution
    pdfHeight()
    
    $(window).resize(function() {
        pdfHeight()
    });
    
// ****************************************************************************************    
    // Make copy elements from the scrollbox when clicked and stick them in the PDF section
    
    $('resizeWrapper').click(function() {
       var myClone = $(this).clone();
       
       myClone.appendTo('.currentPDF');
       
       myClone.draggable({
           containment: '.currentPDF'
       });
        
       myClone.children('img').resizable({
           aspectRatio: 'true',
           containment: '.currentPDF'
       })
        
    });
    
    $('.pdf').droppable()
    
 
    
// *****************************************************************************************    
// *****************************************************************************************
    
    // Drop down menu to select PDF size
    
    
    $('.AmerDrop').click(function() {
        var curSheet = $('.currentPDF');
        var nextSheet = $('.Amer');
        
        if (curSheet!==nextSheet) {
            curSheet.fadeOut(600).removeClass('currentPDF');
            nextSheet.fadeIn(600).addClass('currentPDF');
            
            
        }
        pdfHeight()
    });
    
    $('.EuroDrop').click(function() {
        var curSheet = $('.currentPDF');
        var nextSheet = $('.Euro');
        
        if (curSheet!==nextSheet) {
            curSheet.fadeOut(600).removeClass('currentPDF');
            nextSheet.fadeIn(600).addClass('currentPDF');
        }
        pdfHeight()
    });
    
    
    
// ****************************************************************************************   
    
    /*
    $('.pdf').click(function() {
        var curSheet = $('.current');
        var nextSheet = curSheet.next();
        
        if (nextSheet.length === 0) {
            nextSheet = $('.pdf').first();
        };
        
        curSheet.fadeOut(600).removeClass('current');
        nextSheet.fadeIn(600).addClass('current');
        
    });
    
    */
};

// I don't use these functions anymore, but they can be used as reference
/*
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
*/

function pdfHeight() {
    
    // set height of PDF
    var ratio = 1;
    
    var PDFWidth = $('.currentPDF').width()
    if ($('.currentPDF').is('.Amer') === true) {
        ratio = 1.294;
    } else if ($('.currentPDF').is('.Euro') === true) {
        ratio = 1.414;         
    };
    var PDFHeight = PDFWidth * ratio
    
    $('.currentPDF').css("height", PDFHeight)
}

$(document).ready(main);

