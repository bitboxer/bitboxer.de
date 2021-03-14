var VideoResizeHelper = function() {
  var allVideos = [];
  function resizeEmbed() {
    allVideos.forEach(function(element) {
      var newWidth = element.parentNode.offsetWidth;
      var newHeight = newWidth * element.getAttribute("data-aspectRatio");

      element.style.width = newWidth + "px";
      element.style.height = newHeight + "px";

      var elements = element.querySelectorAll("embed");
      Array.prototype.forEach.call(elements, function(el) {
        el.setAttribute("height", newHeight);
        el.setAttribute("width", newWidth);
      });
    });
  }

  function addResizeEmbed() {
    var elements = document.querySelectorAll(
      "iframe[src*=flickr],iframe[src*=vimeo],iframe[src*=youtube],iframe[src*=slideshare],video"
    );
    Array.prototype.forEach.call(elements, function(el) {
      allVideos.push(el);
    });

    var elements = document.querySelectorAll("object param[name=movie]");
    Array.prototype.forEach.call(elements, function(el) {
      allVideos.push(el.parentNode);
    });

    allVideos.forEach(function(element) {
      element.setAttribute("data-aspectRatio", element.height / element.width);
      element.removeAttribute("height");
      element.removeAttribute("width");
    });

    window.addEventListener("resize", function(event) {
      resizeEmbed();
    });
    resizeEmbed();
  }

  return {
    register: addResizeEmbed
  };
};

function ready(callback) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

ready(function() {
  new VideoResizeHelper().register();
});
