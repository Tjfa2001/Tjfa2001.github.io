const gallery_button = document.getElementById('button--gallery');
const pic = document.getElementById('pic_gallery');

const images = ['../images/pass_manager.png', '../images/pass_manager_logged_in.png'];

let i = 0;

function cycle_image() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    pic.src = images[i];
}

gallery_button.addEventListener('click', () => {
    cycle_image();
});
