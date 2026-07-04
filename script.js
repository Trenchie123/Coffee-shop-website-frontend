// Toggle mobile navigation drawer visibility
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Close mobile menu drawer automatically when clicking a navigation route item
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Handle contact form messaging intercept
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will be in touch shortly.');
    e.target.reset();
}

// Slider controls for testimonials
function nextSlide() {
    document.getElementById('slider-container').scrollBy({ left: 280, behavior: 'smooth' });
}
function prevSlide() {
    document.getElementById('slider-container').scrollBy({ left: -280, behavior: 'smooth' });
}

// 🚀 MOUSE INTERACTIVE PARALLAX EFFECT (Optimized for Screen Safety)
const wrapper = document.getElementById('hero-image-wrapper');
const cup = document.getElementById('parallax-cup');

if (wrapper && cup) {
    // Only run mouse tilt calculations if the user is on a non-touch cursor device
    wrapper.addEventListener('mousemove', (e) => {
        // Prevent activation on mobile touch scrolling events
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const { width, height, left, top } = wrapper.getBoundingClientRect();
        
        // Calculate coordinate grid relative to center of element
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        
        // Dynamic tilt limitation (18 degrees bounds)
        const rotateX = (y / height) * -18;
        const rotateY = (x / width) * 18;
        
        // Render smooth 3D matrix scaling transform state
        cup.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    // Handle smooth reset on mouse leaving containment boundaries
    wrapper.addEventListener('mouseleave', () => {
        cup.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}