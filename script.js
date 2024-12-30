
const images = [
    { src: 'winter.webp', category: 'nature' },
    { src: 'greenfield.jpg', category: 'nature' },
    { src: 'squirrel.jpg', category: 'animals' },
    { src: 'kangaroo.jpg', category: 'animals' },
    { src: 'udaipur.jpg', category: 'cities' },
    { src: 'varanasi.jpg', category: 'cities' },
];


const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');


function loadImages(filter = 'all') {
   
    loading.style.display = 'block';
    gallery.innerHTML = '';
    setTimeout(() => {
        
        const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
        
   
        filteredImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src; 
            imgElement.alt = image.category; 
            gallery.appendChild(imgElement); 
        });
        
        loading.style.display = 'none';
    }, 1000); 
}


document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter'); 
        loadImages(filter); 
    });
});


document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('keydown', (e) => {
        
        if (e.key === 'Enter' || e.key === ' ') {
            button.click(); 
        }
    });
});

loadImages();