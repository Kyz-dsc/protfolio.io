// Effet de survol pour les projets
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.querySelector('img').style.transform = 'scale(1.1)';
    });
    project.addEventListener('mouseleave', () => {
        project.querySelector('img').style.transform = 'scale(1)';
    });
});
