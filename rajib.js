document.addEventListener('DOMContentLoaded', () => {

    // --- Animasi Section saat di-scroll ---
    const sections = document.querySelectorAll('section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Animasi Skill Bar ---
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    setTimeout(() => {
                        bar.style.width = percent + '%';
                    }, 200);
                });
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.3 });
    skillObserver.observe(skillsSection);

    // --- Fungsionalitas Modal Portfolio ---
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modalOverlay = document.getElementById('modal-overlay');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalTargetId = item.getAttribute('data-modal-target');
            const modal = document.querySelector(modalTargetId);
            modalOverlay.classList.add('active');
            modal.style.display = 'block';
        });
    });

    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal();
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});