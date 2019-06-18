
photoSection = document.querySelector('.photography-section')

videoSection = document.querySelector('.videography-section')
videoTag = document.querySelector('.gallery-nav .videography')
photoTag = document.querySelector('.gallery-nav .photography')


navButton = document.querySelector('.mobile-nav-button')
navMenu = document.querySelector('.mobile-nav')
navMenuOptions = document.querySelector('.mobile-nav nav')


navButton.addEventListener('click', function() {
    navMenu.classList.toggle('open')
});

navMenuOptions.addEventListener('click', function() {
    navMenu.classList.remove('open')
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
