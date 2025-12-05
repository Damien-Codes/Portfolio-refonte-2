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

    const moreProjects = document.getElementById('more-projects');
    const showMoreBtn = document.getElementById('show-more-btn');

    if (moreProjects && showMoreBtn) {
        showMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moreProjects.classList.toggle('visible');

            if (moreProjects.classList.contains('visible')) {
                showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Voir moins';
            } else {
                showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Voir plus de projets';
                // Optionnel : remonter légèrement si on ferme
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
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

    /* --- GESTION DU PARCOURS (SWITCH) --- */
    const timelineToggle = document.getElementById('timeline-toggle');
    const timelinePro = document.getElementById('timeline-pro');
    const timelineAcademic = document.getElementById('timeline-academic');
    const labelPro = document.getElementById('label-pro');
    const labelAcademic = document.getElementById('label-academic');

    // Fonction pour changer manuellement via les labels
    window.setTimeline = (type) => { // Attached to window for HTML onclick access
        if (type === 'pro') {
            if (timelineToggle) timelineToggle.checked = false;
            updateTimelineDisplay(false);
        } else {
            if (timelineToggle) timelineToggle.checked = true;
            updateTimelineDisplay(true);
        }
    };

    // Fonction pour le switch
    window.toggleTimeline = () => {
        // managed by label/input connection or change event
    };

    if (timelineToggle) {
        timelineToggle.addEventListener('change', (e) => {
            updateTimelineDisplay(e.target.checked);
        });
    }

    function updateTimelineDisplay(isAcademic) {
        if (isAcademic) {
            // Afficher Académique
            if (timelinePro) timelinePro.classList.add('hidden');
            if (timelineAcademic) timelineAcademic.classList.remove('hidden');

            if (labelPro) labelPro.classList.remove('active');
            if (labelAcademic) labelAcademic.classList.add('active');
        } else {
            // Afficher Professionnel
            if (timelineAcademic) timelineAcademic.classList.add('hidden');
            if (timelinePro) timelinePro.classList.remove('hidden');

            if (labelAcademic) labelAcademic.classList.remove('active');
            if (labelPro) labelPro.classList.add('active');
        }
    }

});