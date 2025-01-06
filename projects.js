// Project data
const projects = [
    {
        title: "Arcade Sync Module Management System",
        description: "  Developed a Project Module Management System using the MERN stack to streamline academic project management for educational institutions. Implemented role-based access control, scheduling, report management,and mark sheet generation. Integrated research paper publication and external verification, prioritizing security,scalability, and usability",
        technologies: ["React", "Node.js", "MongoDB"],
        images: ["A1.png", "A2.png", "A3.png"]
    },
    {
        title: "Fitness Social Media Platform",
        description: "Built a social media platform for fitness enthusiasts to share workouts, meals, and progress through posts, photos, and videos. Key features include interactive posts, real-time notifications, workout/meal planning, secure authentication, and responsive design for seamless cross-device use.",
        technologies: ["Flutter", "Firebase", "SQLite"],
        images: ["F1.png", "F2.png", "F3.png"]
    },
    {
        title: "Spiciy Management System",
        description: "Spicy Management System: A web platform for Lankan Flavor Spicy Co. Simplifies product management, inventory, sales, vendors & finances. Targeted advertising & customer engagement. Optimize operations & boost customer satisfaction in the spice market",
        technologies: ["Angular", "Spring Boot", "PostgreSQL"],
        images: ["J1.jpeg", "J2.jpeg", "J3.jpeg"]
    }
];

let currentProject = 0;
let currentSlide = 0;

// Slider functionality
function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slider img');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slider img');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Project navigation
function updateProject(index) {
    const project = projects[index];
    
    // Update content
    document.querySelector('.project-description h2').textContent = project.title;
    document.querySelector('.project-description p').textContent = project.description;
    
    // Update images
    const slider = document.querySelector('.slider');
    slider.innerHTML = project.images.map((img, i) => 
        `<img src="images/${img}" alt="${project.title} Screenshot ${i + 1}" class="${i === 0 ? 'active' : ''}">`
    ).join('');
    
    // Reset slide position
    currentSlide = 0;
    
    // Update dots
    const dotsContainer = document.querySelector('.slider-dots');
    dotsContainer.innerHTML = project.images.map((_, i) => 
        `<span class="dot ${i === 0 ? 'active' : ''}" onclick="showSlide(${i})"></span>`
    ).join('');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    
    document.querySelector('.next-project').addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProject(currentProject);
    });
    
    document.querySelector('.prev-project').addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProject(currentProject);
    });
    
    // Initialize first project
    updateProject(0);
});

// Optional: Auto-slide
setInterval(nextSlide, 5000);