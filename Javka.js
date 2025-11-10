document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '🌙';
    } else {
        toggleButton.innerHTML = '🌞';
    }
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.innerHTML = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.innerHTML = '🌞';
            localStorage.setItem('theme', 'light');
        }
    });
});