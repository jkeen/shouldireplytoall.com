(function($){  
  $("div.panel").each(function(index) {
    $(this).bind('click', function() {
      if (Modernizr.touch) {
        $(window).scrollTo($(this).next());
      }
      else {
        $(window).scrollTo($(this).next(), 300);
      }
    });
  });
  
  $("header h1 a").click(function() { 
    if (Modernizr.touch) {
      $(window).scrollTo($('div.panel.first'));
    }
    else {
      $(window).scrollTo($('div.panel.first'), 300);
    }
  });
  
  if (!Modernizr.touch){
    function setHeight() {
      var height = $(window).height();
      $("div.panel").css("height", height);
    }
    setHeight();
    $(window).resize(function() { setHeight() });
  }
})(this.jQuery);
