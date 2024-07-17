// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//const navbar = document.querySelector('.navbar');
//const toggleButton = document.createElement('button');
//toggleButton.className = 'navbar-toggle';
//toggleButton.innerHTML = '☰';
//navbar.insertBefore(toggleButton, navbar.firstChild);

toggleButton.addEventListener('click', () => {
    const navLinks = navbar.querySelector('ul');
    navLinks.classList.toggle('open');
});

// Scroll-to-top button functionality
const scrollTopButton = document.createElement('button');
scrollTopButton.className = 'scroll-top';
scrollTopButton.innerHTML = '↑';
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Redirect buttons
document.querySelector('.learn-more-btn').onclick = function() {
    window.location.href = 'https://www.youtube.com/watch?v=c_g1BMVFcuw';
};

document.querySelector('.donate-btn').onclick = function() {
    window.location.href = 'https://palestinecampaign.org/';
};

// Background music controls
const backgroundMusic = document.getElementById('background-music');

// Play music
//document.getElementById('play-music').addEventListener('click', () => {
  //  backgroundMusic.play();
//});

// Pause music
//document.getElementById('pause-music').addEventListener('click', () => {
 //   backgroundMusic.pause();
//});

// Toggle music
//document.getElementById('toggle-music').addEventListener('click', () => {
 //   if (backgroundMusic.paused) {
//        backgroundMusic.play();
//    } else {
  //      backgroundMusic.pause();
 //   }
});

// Volume control
//document.getElementById('volume-control').addEventListener('input', (e) => {
  //  backgroundMusic.volume = e.target.value;
//});

// Dark mode toggle
document.getElementById('theme-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
