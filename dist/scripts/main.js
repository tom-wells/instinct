
photoSection = document.querySelector('.photography-section')

videoSection = document.querySelector('.videography-section')
videoTag = document.querySelector('.gallery-nav .videography')
photoTag = document.querySelector('.gallery-nav .photography')


navButton = document.querySelector('.mobile-nav-button')
navMenu = document.querySelector('.mobile-nav')
navMenuOptions = document.querySelector('.mobile-nav nav')
navCloseTag = document.querySelector('.mobile-nav-close')

navCloseTag.addEventListener('click', function() {
    navButton.classList.remove('open')
    navMenu.classList.remove('open')
    navCloseTag.classList.remove('open')

})

navButton.addEventListener('click', function() {
    navMenu.classList.add('open')
    navCloseTag.classList.add('open')
    navButton.classList.add('open')
});

navMenuOptions.addEventListener('click', function() {
    navMenu.classList.remove('open')
    navCloseTag.classList.remove('open')
    navButton.classList.remove('open')
});

videoTag.addEventListener('click', function() {
    videoTag.classList.add('selected')
    photoTag.classList.remove('selected')
    videoSection.classList.add('open')
    photoSection.classList.remove('open')
});

photoTag.addEventListener('click', function() {
    photoTag.classList.add('selected')
    photoSection.classList.add('open')
    videoSection.classList.remove('open')
    videoTag.classList.remove('selected')

});


// responsive Javascipt

var stateManager = (function () {
    var state = null;
    var resizePage = function () {
      if ($('body').width() <= 960) {
        if (state !== "mobile") { displayMobile(); }
  resizeMobile();
      }
      else {
        if (state !== "desktop") { displayDesktop(); }
  resizeDesktop();
      }
  }; 
    var displayMobile = function () {
  state = "mobile";
  console.log("enter mobile");
    };
    var displayDesktop = function () {
  state = "desktop";
  console.log("enter desktop");

  $('.images .image').on('click', function() {


    var currentImage = $(this).html()
    $('.modal-content').html(currentImage)
    $('.modal').fadeIn(500)
    return false
})

$('.videos .video').on('click', function() {


    var currentImage = $(this).html()
    $('.modal-content').html(currentImage)
    $('.modal').fadeIn(500)
    return false
})

$('.modal-close, .modal-background').on('click', function() {
    $('.modal').fadeOut(500)
    return false
})

    };
    var resizeMobile = function () {
      console.log("resizing mobile");
    };
    var resizeDesktop = function () {
      console.log("resizing desktop");
    };
    return {
      init: function () {
        resizePage();
        $(window).on('resize', resizePage);
      }
    };
  } ());
  stateManager.init();
  
  // do your stuff
  


