// TrollEdit v1.0
$(document).ready(function()
{	
	// btn show features
	$("#btn-features").click(function()
	{
		$("#features-content").slideToggle(1800);
		$("#btn-features").hide();
		return false;
	});
	
	// btn close features
	$("#btn-featuresClose").click(function()
	{
		$("#features-content").slideToggle();
		$("#btn-features").fadeIn(1200);
		return false;
	});
	
    // btn add members
	$("#join-team").click(function()
	{
		$("#subSection-fork").slideToggle(1100);
		return false;
	});
	
	// scroll for back to top 
	$("#backTop").click(function()
	{
		$("html, body").animate({scrollTop: $("body").offset().top}, 2000);
		return false;
	});
	
	// scroll for home  
	$("#nav-home").click(function()
	{
		$("html, body").animate({scrollTop: $("body").offset().top}, 2000);
		//$("#nav-home").css("color", "#D40505");
		//$("#nav-team, #nav-download, #nav-contact, #nav-about").css("color","#404040");
		return false;
	});

	
	// scroll for about
	$("#nav-about").click(function()
	{
		$("html, body").animate({scrollTop: $("#scroll-about").offset().top}, 2000);
		return false;
	});

	// scroll for team	
	$("#nav-team").click(function()
	{
		$("html, body").animate({scrollTop: $("#scroll-team").offset().top}, 2000);
		return false;
	});
	
	// scroll for download
	$("#nav-download").click(function()
	{
		$("html, body").animate({scrollTop: $("#scroll-download").offset().top}, 2000);
		return false;
	});
	
	// scroll for contact
	$("#nav-contact").click(function()
	{
		$("html, body").animate({scrollTop: $("#scroll-contact").offset().top}, 2000);
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


