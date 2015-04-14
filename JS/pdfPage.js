var main = function() {
 
    // Make the PDF size change to match the screen resolution
    pdfHeight()
    
    $(window).resize(function() {
        pdfHeight()
    });
    
// ****************************************************************************************    
    // Make copy elements from the scrollbox when clicked and stick them in the PDF section
    
    $('.scrollBox .resizeWrapper').click(function() {
        var myClone = $(this).clone();
       
        myClone.appendTo('.currentPDF');
       
        
        myClone.draggable({
            containment: '.currentPDF'
        });
        
        myClone.addClass('pdfChild');       
        
        myClone.children('img').resizable({
            aspectRatio: 'true',
            containment: '.currentPDF'
        });
        
        
        myClone.css("position", "absolute");
        
    });
    
    $('.pdf').droppable()
    
// *****************************************************************************************
// *****************************************************************************************

// Behavior of elements in the pdf

    // Dynamically add a click function to elements as they are added to the PDF
    $(document).on('click', '.pdfChild', function() {
        
        // quit click if we're dragging the element
        if ($(this).is('.ui-draggable-dragging')) {
            return;
        };


        if ($(this).is('.currentPDFchild')) {

            $(this).removeClass('currentPDFchild');

        } else {
            var currentChild = $('.currentPDFchild');
            
            currentChild.removeClass('currentPDFchild');
            
            $(this).addClass('currentPDFchild');

        };
        
    });
    
    // Button up function to delete an element
    $(document).keyup(function(event) {
        if (event.keyCode === 46) {
            $('.currentPDFchild').remove();  
        };
    });
    
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
};


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
    
    $('.currentPDF').css("height", PDFHeight + "px")
    
    // adjust the size of the page container
    $('.pageContainer').css("height", PDFHeight + 20 + "px")
    
    // move the bottom buffers to be under the pdf
    $('.bottom').css("top", PDFHeight + 20 + "px")
};

$(document).ready(main);

