// Real-time clock
function updateTime() {
    const timeEl = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const meridian = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    timeEl.textContent = `${hours}:${minutes} ${meridian}`;
}

updateTime();
setInterval(updateTime, 1000);

// Load development projects
function loadProjects() {
    const projects = [
        {
            title: 'Real-time Monitoring System',
            desc: 'Live developer dashboard with project tracking and real-time updates',
            tech: ['JavaScript', 'HTML/CSS', 'GitHub Pages']
        },
        {
            title: 'AccessPoint Platform',
            desc: 'Booking and scheduling system with live availability tracking',
            tech: ['Full Stack', 'Database Design', 'APIs']
        },
        {
            title: 'Data Pipeline Architecture',
            desc: 'Building scalable data processing systems with Python & R',
            tech: ['Python', 'Data Science', 'Statistics']
        },
        {
            title: 'Enterprise Software Solutions',
            desc: 'Custom multi-tenant applications for business workflows',
            tech: ['Backend', 'Security', 'Scalability']
        },
        {
            title: 'Legacy Code Refactoring',
            desc: 'Modernizing outdated systems with best practices',
            tech: ['Code Quality', 'Testing', 'Documentation']
        },
        {
            title: 'Database Optimization',
            desc: 'Designing efficient schemas for high-traffic applications',
            tech: ['SQL', 'Performance', 'Architecture']
        }
    ];

    const container = document.getElementById('projects');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="tech-tags">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

loadProjects();

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.children[0].value;
    const message = this.children[1].value;
    
    // Simple success feedback
    alert(`Thanks ${name}! Message received. I'll reach out soon.`);
    this.reset();
    
    // Update footer status
    const statusUpdate = document.getElementById('status-update');
    statusUpdate.textContent = `Last contact: ${new Date().toLocaleTimeString()}`;
});

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});