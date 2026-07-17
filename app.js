document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const iframe = document.getElementById('simulator-frame');
    const title = document.getElementById('current-sim-title');
    const fullscreenBtn = document.getElementById('btn-fullscreen');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            
            // Update title
            title.textContent = item.querySelector('.text').textContent + ' Simulator';
            
            // Fade out, change source, fade in
            iframe.classList.add('fade-out');
            
            setTimeout(() => {
                iframe.src = item.dataset.target;
                iframe.onload = () => {
                    iframe.classList.remove('fade-out');
                };
            }, 300);
        });
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
