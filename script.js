// Smooth scroll for nav links

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({ behavior: 'smooth' });

  });

});

// Demo button alert

function showDemo(projectName) {

  alert(`Demo for "${projectName}" coming soon!`);

}