// ===========================
// Navigation Scroll Effect
// ===========================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 80px for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Fade-in Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Observe workflow steps
document.querySelectorAll('.workflow-step').forEach(step => {
    observer.observe(step);
});

// Observe stat items
document.querySelectorAll('.stat-item').forEach(stat => {
    observer.observe(stat);
});

// ===========================
// Counter Animation for Stats
// ===========================
const animateCounter = (element, target, suffix = '') => {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

// Trigger counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            
            // Extract number and suffix
            const match = text.match(/([\d.]+)(.*)/);
            if (match) {
                const number = parseFloat(match[1]);
                const suffix = match[2];
                statNumber.textContent = '0' + suffix;
                animateCounter(statNumber, number, suffix);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ===========================
// Mobile Menu Toggle (Optional)
// ===========================
// Uncomment if you want to add a mobile hamburger menu
/*
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.style.cssText = 'display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;';
    
    nav.querySelector('.nav-container').appendChild(hamburger);
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    // Show hamburger on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQuery = (e) => {
        hamburger.style.display = e.matches ? 'block' : 'none';
        if (!e.matches) {
            navLinks.classList.remove('active');
        }
    };
    
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
};

createMobileMenu();
*/

// ===========================
// Print Optimization
// ===========================
window.addEventListener('beforeprint', () => {
    // Remove animations before printing
    document.body.style.animation = 'none';
    document.querySelectorAll('.blob').forEach(blob => {
        blob.style.animation = 'none';
    });
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%c🚀 企业 AI 全员落地 2026', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c让 AI 成为每个员工的超能力', 'font-size: 14px; color: #818cf8;');
console.log('%c📊 80% 日活率 | 27% 效率提升 | 32.5x ROI', 'font-size: 12px; color: #94a3b8;');

// ===========================
// Performance Monitoring
// ===========================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ 页面加载时间: ${pageLoadTime}ms`);
        }, 0);
    });
}
