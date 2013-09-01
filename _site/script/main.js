var VideoResizeHelper = function() {
  var allVideos = [];
  function flashPlayerResize() {
    $.each(allVideos, function(i, val) {
      var el = $(val);
      var newWidth = el.parent().width();
      var newHeight = newWidth * el.attr('data-aspectRatio');
      el.width(newWidth).height(newHeight);
      $("embed", el).each(function() {
        $(this).attr("width", newWidth);
        $(this).attr("height", newHeight);
      });
    });
  }

  function flashPlayerAddFluidResize() {
    $("iframe[src*=vimeo],iframe[src*=youtube]").each(function(i, obj){
      allVideos.push(obj);
    });

    $('object').each(function(i, object) {
      if ( $('param[name=movie]', object).length ) {
        allVideos.push(object);
      }
    });

    $.each(allVideos, function(i, val) {
      $(val).attr('data-aspectRatio',val.height /val.width)
      .removeAttr('height')
      .removeAttr('width');
    });

    $(window).resize(function() {
      flashPlayerResize();
    });
    flashPlayerResize();
  }

  return {
    register: flashPlayerAddFluidResize
  }
}


$(function() {
  $('.content, .home').flowtype({
    minimum   : 500,
    maximum   : 1200,
    minFont   : 18,
    maxFont   : 40,
    fontRatio : 35,
    lineRatio : 1.45
  });
  new VideoResizeHelper().register();
});

