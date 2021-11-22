window.onload = function() {
    lightGallery(document.getElementById('animation-thumbnails'), {
        thumbnail: true,
        selector: "a"
    });
    lightGallery(document.getElementById('map-thumbnails'), {
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
        selector: "a"
    });
};

window.onscroll = function() {
    mybutton = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}