
photoSection = document.querySelector('.photography-section')

videoSection = document.querySelector('.videography-section')
videoTag = document.querySelector('.gallery-nav .videography')
photoTag = document.querySelector('.gallery-nav .photography')


videoTag.addEventListener('click', function() {
    videoTag.classList.add('selected')
    photoTag.classList.remove('selected')
    videoSection.classList.add('open')
    photoSection.classList.remove('open')
});

photoTag.addEventListener('click', function() {
    photoTag.classList.add('selected')
    photoSection.classList.add('open')
    videoTag.classList.remove('selected')

    videoSection.classList.remove('open')

});
