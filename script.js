// for TrollEdit
// v1.0
 
//for slide down in about section 
$(function()
{	
    $('#tech-content').hide();
    
	$('#tech').click(function()
	{
		$('#tech-content').slideToggle(1500);
		return false;
	});
});


$(function()
{	
    $('#screen-content').hide();
    
	$('#screen').click(function()
	{
		$('#screen-content').slideToggle(1500);
		return false;
	});
});


$(function()
{	
    $('#see-content').hide();
    
	$('#see').click(function()
	{
		$('#see-content').slideToggle(1500);
		return false;
	});
});


$(function()
{	
    $('#work-content').hide();
    
	$('#work').click(function()
	{
		$('#work-content').slideToggle(1500);
		return false;
	});
});

$(function()
{	
    $('#features-content').hide();
    
	$('#features').click(function()
	{
		$('#features-content').slideToggle(1500);
		return false;
	});
});



// for slides 

$(document).ready(function()
{
  var currentPosition = 0;
  var slideWidth = 900;  
  var slides = $('.slide');
  var numberOfSlides = slides.length;

  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Insert controls in the DOM
  $('#slideshow')
    .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
    .append('<span class="control" id="rightControl">Clicking moves right</span>');

  // Hide left arrow control on first load
  manageControls(currentPosition);

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
	currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
    
	// Hide / show controls
    manageControls(currentPosition);
    // Move slideInner using margin-left
    $('#slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  });

  // manageControls: Hides and Shows controls depending on currentPosition
  function manageControls(position){
    // Hide left arrow if position is first slide
	if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
	// Hide right arrow if position is last slide
    if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
  }	
});


