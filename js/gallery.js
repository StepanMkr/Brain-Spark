let previewList = document.querySelector('.preview-list');
let images = document.querySelectorAll('.preview-list a');
let mainPhoto = document.querySelector('.active-photo');

for (let image of images) {
    image.onclick = function(evt) {
        evt.preventDefault();
        mainPhoto.src = image.href;
        let currentImage = document.querySelector('.active-item');
        currentImage.classList.remove('active-item');
        image.classList.add('active-item');
    }
}