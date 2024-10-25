// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to Top Button Visibility
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Modal for Project Details
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');

function showProjectDetails(projectId) {
    modal.style.display = 'flex';
    let content = '';

    if (projectId === 'project1') {
        content = `<h3>Ecommerce Shoe Store</h3>
        <img src="Ecommerce.jpg" alt="Ecommerce Shoe Store" style=" width: 250px;
    border-radius: 10px;
    margin-top: 1rem;"> 
    <p>Developed a dynamic and responsive e-commerce website showcasing men's, women's, and
children's footwear. Designed intuitive UI layouts for product display, implemented user-friendly navigation, and
ensured cross-browser compatibility. Applied modern CSS techniques and JavaScript for interactivity, providing a
seamless user experience. </p>`;
    } else if (projectId === 'project2') {
        content = `<h3>Recipe Finder</h3>  
        <img src="Recipe.jpg" alt="Recipe Finder" style=" width: 250px;
    border-radius: 10px;
    margin-top: 1rem;"> 
    <p>Built an interactive Recipe Finder web application using HTML, CSS, and JavaScript, integrated with
TheMealDB API. The app enables users to search for recipes by meal names, displaying results dynamically. It
features a clean, responsive design and utilizes JavaScript for fetching and displaying recipe data in real-time.</p>`;
    } else if (projectId === 'project3') {
        content = `<h3>Weather App</h3> 
        <img src="Weather.jpg" alt="Weather App" style=" width: 250px;
    border-radius: 10px;
    margin-top: 1rem;"> 
    <p> Created a responsive weather application using HTML, CSS, and JavaScript that fetches realtime weather data from the OpenWeatherMap API. The app allows users to search for current weather
conditions by city and provides detailed weather metrics, including temperature, humidity, wind speed,
and weather status. The application features intuitive error handling and a responsive design for crossdevice compatibility.
</p>`;
    }

    modalBody.innerHTML = content;
}

function closeModal() {
    modal.style.display = 'none';
}

// Close Modal when Clicking Outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};
