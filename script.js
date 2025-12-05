document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for anchor links (polyfill for older browsers if needed, but CSS scroll-behavior handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    /* --- GESTION DES PROJETS SECONDAIRES --- */

    const allProjectsSection = document.getElementById('all-projects');
    const voirTousButton = document.querySelector('.cta-voir-plus .btn');
    const separator = document.querySelector('.separator-project');

    // 1. Masquer la section des projets secondaires au chargement
    if (allProjectsSection) {
        allProjectsSection.classList.add('hidden');
    }
    if (separator) {
        separator.classList.add('hidden');
    }

    // 2. Écouteur d'événement sur le bouton "Voir Tous Mes Projets"
    if (voirTousButton && allProjectsSection) {
        voirTousButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (allProjectsSection.classList.contains('hidden')) {
                allProjectsSection.classList.remove('hidden');
                separator.classList.remove('hidden');
                voirTousButton.textContent = 'Masquer les autres projets';

                allProjectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                allProjectsSection.classList.add('hidden');
                separator.classList.add('hidden');
                voirTousButton.textContent = 'Voir Tous Mes Projets';

                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    /* --- GESTION DES CERTIFICATIONS SECONDAIRES --- */

    const allCertsSection = document.getElementById('all-certs');
    const toggleCertsButton = document.getElementById('toggle-certs-button');

    // 1. Masquer la section des certifications secondaires au chargement
    if (allCertsSection) {
        allCertsSection.classList.add('hidden');
    }

    // 2. Écouteur d'événement sur le bouton "Voir Plus de Certifications"
    if (toggleCertsButton && allCertsSection) {
        toggleCertsButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Si la section est cachée, on l'affiche
            if (allCertsSection.classList.contains('hidden')) {
                allCertsSection.classList.remove('hidden');
                toggleCertsButton.textContent = 'Masquer les certifications supplémentaires'; // Changement de texte

                // Défiler pour montrer les certifications
                allCertsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Si la section est visible, on la cache
                allCertsSection.classList.add('hidden');
                toggleCertsButton.textContent = 'Voir 1+ autres Certifications'; // Rétablissement du texte
            }
        });
    }

});