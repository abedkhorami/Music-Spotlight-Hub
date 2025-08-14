document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-text, .slide-in-item');
    const waveform = document.querySelector('.waveform');
    const spinners = document.querySelectorAll('.loading-spinner');
    const playAllBtn = document.getElementById('play-all-btn');
    const playlistSection = document.getElementById('playlist');
    const navLinks = document.querySelectorAll('.friendly-nav a');

    // Smooth Scroll for Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // On-Scroll Reveals
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Hide Spinners on Load
    document.querySelectorAll('iframe').forEach(video => {
        video.addEventListener('load', () => {
            waveform.style.display = 'flex';
            spinners.forEach(spinner => spinner.style.display = 'none');
        });
    });

    // Play All Button
    playAllBtn.addEventListener('click', () => {
        playlistSection.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('playlist-video').focus();
    });

    // Pulse Sync
    setInterval(() => {
        document.querySelectorAll('.pulse-glow').forEach(card => {
            card.style.transform = card.style.transform === 'scale(1.02)' ? 'scale(1)' : 'scale(1.02)';
        });
    }, 800);

    // Randomized Particles
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 8; i++) { // Reduced to 8 for performance
        const particle = document.createElement('div');
        particle.style.width = `${Math.random() * 8 + 4}px`;
        particle.style.height = particle.style.width;
        particle.style.top = `${Math.random() * 90}%`;
        particle.style.left = `${Math.random() * 90}%`;
        particle.style.animationDuration = `${Math.random() * 12 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particlesContainer.appendChild(particle);
    }
});
