(function($){
  $(function(){

    
       
      var owl = $('.owl-carousel');
		
		owl.owlCarousel({
			autoplay:true,
			autoplayTimeout:5000,
		    loop:true,
		    margin:10,
		    nav:false,
		    touchDrag  : true,
		    mouseDrag  : true,
            items: 1,
            nav: true,
           singleItem:true,
            
		    
		    
		})
     
  }); // end of document ready
})(jQuery); // end of jQuery name space