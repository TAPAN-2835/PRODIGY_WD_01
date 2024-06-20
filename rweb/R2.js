document.addEventListener('DOMContentLoaded', function () {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuIcon = document.getElementById('menuIcon');
    const navMenu = document.getElementById('navMenu');

    playPauseBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                if (section === targetSection) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            setTimeout(() => {
                sections.forEach(section => {
                    if (section !== targetSection) {
                        section.style.display = 'none';
                    }
                });
                targetSection.style.display = 'block';

                // Smooth scroll to the section
                if (targetId === 'home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 600);

            // Close the mobile menu after a link is clicked
            navMenu.classList.remove('show');
        });
    });

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});
