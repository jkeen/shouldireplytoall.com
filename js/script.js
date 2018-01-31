(function($){
  $("div.panel").on("click", function() {
    $(window).scrollTo($(this).next(), (Modernizr.touch ? 0 : 300));
  })

  $("header h1 a").on('click', function() {
    $(window).scrollTo($('div.panel.first'), (Modernizr.touch ? 0 : 300));
  });

  if (!Modernizr.touch){
    function setHeight() {
      var height = $(window).height();
      $("div.panel").css("min-height", height);
    }
    setHeight();
    $(window).resize(function() { setHeight() });
  }
})(this.jQuery);
