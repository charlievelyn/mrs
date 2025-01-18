document.addEventListener("DOMContentLoaded", function() {
    const BannerList = [
        { src: "assets/banner/image1.jpg", alt: "Project 1", title: "Modern Skyscraper", caption: "Redefining urban landscapes." },
        { src: "assets/banner/image2.jpg", alt: "Project 2", title: "Luxury Villas", caption: "Creating homes for the future." },
        { src: "assets/banner/image3.jpg", alt: "Project 3", title: "Commercial Complex", caption: "Building spaces for growth." }
    ];
    
    const GalleryList = [
        { src: "assets/gallery/image1.jpg", alt: "Banner Image 1" },
        { src: "assets/gallery/image2.jpg", alt: "Banner Image 2" },
        { src: "assets/gallery/image3.jpg", alt: "Banner Image 3" },
        { src: "assets/gallery/image4.jpg", alt: "Banner Image 4" },
        { src: "assets/gallery/image5.jpg", alt: "Banner Image 5" },
        { src: "assets/gallery/image6.jpg", alt: "Banner Image 6" },
    ];

    function preloadImages(urls) {
        urls.forEach(function(image) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = image.src;
            document.head.appendChild(link);
        });
    }

    preloadImages(BannerList);
    preloadImages(GalleryList);

    // Attach the functions to the global window object
    window.getBanner = function() {
        return BannerList;
    };
    
    window.getGallery = function() {
        return GalleryList;
    };
	console.log('preload.js is successfully loaded');
});
