// Prevent default keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && 
        ['u', 'v', 'c', 'a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});

// Sidebar toggle
// function toggleNav() {
//     const sidebar = document.getElementById('mySidebar');
//     const button = document.querySelector('.openbtn');
    
//     sidebar.classList.toggle('active');
//     button.textContent = sidebar.classList.contains('active') ? 
//         '✖ Close Sidebar' : '☰ Open Sidebar';
// }

// Get visitor count from localStorage or start at 0
let visitorCount = localStorage.getItem('visitorCount') || 0;

// Increment count for new visit
visitorCount++;

// Save new count
localStorage.setItem('visitorCount', visitorCount);

// Display count
document.getElementById('visitorCount').textContent = visitorCount;

