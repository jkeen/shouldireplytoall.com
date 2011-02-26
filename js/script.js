(function($){  
  $("div.panel").each(function(index) {
    $(this).bind('click', function() {
      $(window).scrollTo($(this).next(), 300)
    })    
  });
  
  $("header h1 a").click(function() { 
    $(window).scrollTo($('div.panel.first'), 300);
  });
  
  function setHeight() {
    var height = $(window).height();
    $("div.panel").css("height", height);
  }
  
  if (!Modernizr.touch){
    setHeight();
    $(window).resize(function() { setHeight() });
  }
})(this.jQuery);





















