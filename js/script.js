function createSnow() {
    const flake = document.createElement('div');
    flake.classList.add('snow');
    flake.style.left = `${Math.random() * window.innerWidth}px`;
    flake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(flake);
    
    flake.addEventListener('animationiteration', () => {
        flake.remove();
        createSnow();
    });
}

setInterval(createSnow, 500);