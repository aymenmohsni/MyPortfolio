document.addEventListener("DOMContentLoaded", function () {
    const galleryElement = document.getElementById('lightgallery');
    if (galleryElement) {
        lightGallery(galleryElement, {
            selector: 'li',
            subHtmlSelectorRelative: true,
            download: false,
        });
    }
});
