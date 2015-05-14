$(document).ready(function(){
	$('.stormInfo').hide(); //Hides the hurricane info panels in index.html.

    /* Cllick event that toggles the sliding info element in index.html's hurricane images. Also watches for mouseover for css styling. */	

    $( '.stormThumbnail' ).on({
    click: function() {
    	$('.activeInfo').slideToggle().removeClass('activeInfo');
    	$('.imgPressed').removeClass('imgPressed');
        $(this).next('.stormInfo').slideToggle().addClass('activeInfo');
        $(this).addClass('imgPressed');
    	},
    mouseover: function(){
    	$(this).addClass('imgOver');
    	$(this).css('cursor', 'pointer');
    	},
    mouseout: function(){
    	$(this).removeClass('imgOver');
    	}
	});

    /* Click event. Functionality for the dropdowns in survivaltips.html and classification.html. */

	$('.survivaltip').hide();
	$( '.drpdown' ).on({
    click: function() {
        var thisArrow = $(this).find('.arrow');
        $(this).next('.survivaltip').slideToggle();
        if (thisArrow.hasClass('active')){
            thisArrow.attr("src", '../images/arrowright.jpg');
            thisArrow.removeClass('active');
            }
        else{
            thisArrow.attr("src", '../images/arrowdown.jpg');
            thisArrow.addClass('active');
        }
    },
    mouseover: function(){
    	$(this).css('cursor', 'pointer');
    	}
    });

    /* The quiz grading script for quiz.html. When the check answer button is clicked, it checks each checked radio input, and if the value of that radio matches the correct answer, 
    numcorrect is incremented by one. The number correct is displayed, and the question's markup is given appropriate css styling for whether or not the answer was correct.*/

    $('#checkbutton').on({
        click: function(){
            
            var numcorrect = 0;

            $('input[type="radio"]:checked').each(function() {
                if(this.value == "O"){
                    numcorrect++;
                    $(this).next('.alert').addClass('alert-success');
                    $(this).find('.hidden').show();
                }
                else{
                    $(this).next('.alert').addClass('alert-danger');
                }
            })

            document.getElementById('results').innerHTML = ('You got '+ numcorrect + ' correct!');
        }
    });
});