document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('waterfall-container');
    const baseItems = Array.from(container.children);

    
    function appendItems() {
        baseItems.forEach(item => {
            const clone = item.cloneNode(true);
            container.appendChild(clone);
        });
    }

    
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
            appendItems();
        }
    });
});
