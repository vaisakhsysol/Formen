document.querySelectorAll('.box').forEach(box => {
    const overlayClients = box.querySelector('.overlayClients');
    
    box.addEventListener("mouseenter", () => {
        overlayClients.classList.add('active');
    });
    
    box.addEventListener("mouseleave", () => {
        overlayClients.classList.remove('active');
    });
});