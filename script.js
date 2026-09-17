/*
 * Portfolio JavaScript - Modern Interactive Features
 * 
 * Copyright (c) 2024 Sathiyaseelan Soundar
 * All rights reserved.
 * 
 * This code is protected by copyright law. Unauthorized reproduction,
 * distribution, or modification is strictly prohibited.
 * 
 * For permissions, contact: sathiyaseelansoundar@gmail.com
 */

// DOM Elements
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const cursorTrail = document.querySelector('.cursor-trail');

// Project data - Your actual project information
const projectsData = {
    1: {
        title: "Bus Reservation System",
        image: "assets/Img/a6768390-5f4b-4745-9021-d74f2a378375.png",
        description: "Developed a Java-based Bus Ticket Booking System with features for seat reservation, date-wise availability checks, and bus info display. Designed modular OOP classes for Bus and Booking with dynamic data handling using ArrayLists.",
        technologies: ["Core Java", "ArrayList", "OOPS"],
        liveUrl: "#",
        codeUrl: "#"
    },
    2: {
        title: "Automated Prompt generator",
        image: "assets/Img/automation%20thumbnail.png",
        description: "The AI Prompt Builder is a smart tool I developed to transform vague ideas into precise, ready-to-use prompts. Instead of leaving users to struggle with unclear requirements, the tool asks step-by-step, adaptive questions that refine their input and guide them toward clarity. Whether it's building a roadmap, generating AI images, or drafting proposals, the tool ensures that the final output is well-structured and professional. With features like an interactive form, guided questioning, and automatic prompt generation, it saves time, removes ambiguity, and delivers consistent, high-quality results—making it a valuable addition for anyone working with AI-driven tasks.",
        technologies: ["n8n", "Gemini API", "Prompt Engineering"],
        liveUrl: "https://www.linkedin.com/posts/sathiyaseelan-soundar-a012a821b_n8n-automation-promptgenerator-activity-7356966264201768961-j_EV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdk7aEBfwQhtpE3bOWkWPQis7mIX41k0sk",
        codeUrl: "#"
    },
    3: {
        title: "Movie ticket Booking App UI Design",
        image: "assets/Img/1750580738506.png",
        description: "Crafted to enhance the cinema ticket booking journey, the interface emphasizes seamless navigation, an intuitive layout, genre filtering, and detailed ticket visualization.\n\n🔍 Highlights:\n🎬 Movie genre filter options: Action, Comedy, Sci-Fi\n🎟 Detailed ticket design showcasing screen & seat information\n👤 Actor-centric movie pages\n📍 Location-based browsing, featuring Puducherry in this demo",
        technologies: ["Figma", "Dall-E"],
        liveUrl: "https://www.behance.net/gallery/228688295/Movie-Ticket-Booking-APP-design",
        codeUrl: "#"
    },
    4: {
        title: "Landing Page Design - CRO - Anti aging oil",
        image: "assets/Img/Because%20your%20skin%20deserves%20more%20than%20promises.png",
        description: "I designed a conversion-optimized landing page for a luxury skincare brand 🌿✨, focusing on creating a premium and elegant user experience. The design combines clean layouts, a sophisticated color palette, and modern typography to reflect the brand’s luxury identity. To improve conversions, I incorporated clear call-to-actions, persuasive content placement, and trust-building elements such as testimonials and benefits upfront. The landing page is fully responsive, ensuring a seamless experience across devices, and was crafted entirely in Figma, following CRO and UX best practices.",
        technologies: ["Figma", "Dall-E"],
        liveUrl: "https://www.behance.net/gallery/234528483/Landing-Page-Radiant-Youth-oil",
        codeUrl: "#"
    },
    5: {
        title: "Compact Multiband Metamaterial-Inspired Absorber for RF Energy Harvesting",
        image: "assets/Img/antenna%20design.png",
        description: "RF energy harvesting is an emerging technology that converts ambient radio frequency signals into usable electrical power for low-power electronic devices. This project addresses key challenges of existing RF harvesting systems, including limited bandwidth, low efficiency, and poor impedance matching. A compact multiband metamaterial-inspired absorber is designed to improve energy absorption across multiple frequency bands. The use of metamaterials enhances electromagnetic performance while maintaining a small and lightweight structure. The antenna incorporates a staircase microstrip patch and metamaterial structures in the ground plane to achieve multiband operation. Simulation is carried out using ADS software, focusing on parameters such as return loss, gain, radiation pattern, and efficiency. The results demonstrate improved performance suitable for ambient RF energy harvesting. This approach reduces reliance on batteries and external power sources. The system is well suited for IoT devices, wireless sensor networks, and wearable electronics. Overall, the work contributes to the development of sustainable and self-powered wireless technologies.",
        technologies: ["ADS", "Antenna Design", "RF Energy Harvesting"],
        liveUrl: "#",
        codeUrl: "#"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupScrollAnimations();
    setupSkillBars();
    setupProjectModals();
    setupChatbot();
    setupCursorTrail();
    setupSmoothScrolling();
    setupNavbarScroll();
}

// Navigation functionality
function setupNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function setupNavbarScroll() {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.08)';
            navbar.style.backdropFilter = 'blur(16px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.05)';
            navbar.style.backdropFilter = 'blur(16px)';
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-title, .about-content, .skills-grid, .projects-grid, .contact-content, .resume-content');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Skill bars animation
function setupSkillBars() {
    const skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
                skillBar.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Project modals
function setupProjectModals() {
    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            const projectData = projectsData[projectId];

            if (projectData) {
                openProjectModal(projectData);
            } else {
                // Fallback: build data from DOM if not in projectsData
                const title = this.querySelector('.project-content h3')?.textContent?.trim() || 'Project';
                const img = this.querySelector('.project-image img')?.src || '';
                const fullDesc = this.querySelector('.project-content p')?.getAttribute('data-full') || this.querySelector('.project-content p')?.textContent || '';
                const techs = Array.from(this.querySelectorAll('.project-tech .tech-tag')).map(t => t.textContent.trim());
                openProjectModal({ title, image: img, description: fullDesc, technologies: techs, liveUrl: '#', codeUrl: '#' });
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openProjectModal(projectData) {
    document.getElementById('modalTitle').textContent = projectData.title;
    document.getElementById('modalImage').src = projectData.image;
    document.getElementById('modalImage').alt = projectData.title;
    document.getElementById('modalDescription').innerHTML = projectData.description.replace(/\n/g, '<br>');

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    projectData.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        techContainer.appendChild(techTag);
    });

    document.getElementById('modalLive').href = projectData.liveUrl;
    document.getElementById('modalCode').href = projectData.codeUrl;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// AI Chatbot functionality
function setupChatbot() {
    // Toggle chatbot
    chatbotToggle.addEventListener('click', function () {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            chatInput.focus();
            // Add welcome message if chat is empty
            const chatBody = document.querySelector('.chatbot-body');
            if (chatBody.children.length === 0) {
                addChatMessage("Hello! I'm here to help you learn about Sathiyaseelan's professional background. You can ask me about his skills, experience, education, projects, or contact information. What would you like to know?", 'bot');
            }
        }
    });

    // Close chatbot
    chatbotClose.addEventListener('click', function () {
        chatbotWindow.classList.remove('active');
    });

    // Send message
    sendMessage.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    // Close chatbot when clicking outside
    document.addEventListener('click', function (e) {
        if (!chatbotToggle.contains(e.target) && !chatbotWindow.contains(e.target)) {
            chatbotWindow.classList.remove('active');
        }
    });
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addChatMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Simulate AI response with realistic delay
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateAIResponse(message);
            addChatMessage(response, 'bot');
        }, 800 + Math.random() * 1200); // Random delay between 800-2000ms
    }
}

function showTypingIndicator() {
    const chatBody = document.querySelector('.chatbot-body');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function addChatMessage(message, sender) {
    const chatBody = document.querySelector('.chatbot-body');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;

    // Simple text message
    if (typeof message === 'string') {
        messageDiv.innerHTML = `<p>${message}</p>`;
    } else if (message && message.type === 'links' && Array.isArray(message.links)) {
        // Message with social media link buttons
        let html = '';
        if (message.text) {
            html += `<p>${message.text}</p>`;
        }
        html += '<div class="chat-links">';
        message.links.forEach(link => {
            html += `<button class="chat-link-btn" data-url="${link.url}">${link.label}</button>`;
        });
        html += '</div>';
        messageDiv.innerHTML = html;
    } else {
        // Fallback
        messageDiv.innerHTML = `<p>${String(message)}</p>`;
    }

    chatBody.appendChild(messageDiv);

    // Attach click handlers for link buttons
    const buttons = messageDiv.querySelectorAll('.chat-link-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Personal information responses
    if (lowerMessage.includes('name') || lowerMessage.includes('who are you') || lowerMessage.includes('what is your name')) {
        return "My name is Sathiyaseelan Soundar. Nice to meet you";
    }

    if (lowerMessage.includes('self intro') || lowerMessage.includes('intro') || lowerMessage.includes('About you')) {
        return "My name is Sathiyaseelan Soundar. Recent graduate in B.tech in specialization in ECE in 2025 at Sri Manakula Vinayagar Engineering College puducherry.";
    }

    // Experience level and skills
    if (lowerMessage.includes('experience') || lowerMessage.includes('level') || lowerMessage.includes('fresher') || lowerMessage.includes('beginner')) {
        return "I'm a fresher with strong foundational skills in Java, MySQL, Figma, n8n, PowerBI, MS Excel, JavaScript, HTML, and CSS. I'm eager to apply these skills in a professional environment and continuously learn new technologies.";
    }


    // Candidate quality assessment
    if (lowerMessage.includes('good candidate') || lowerMessage.includes('suitable') || lowerMessage.includes('qualified') || lowerMessage.includes('capable') || lowerMessage.includes('reliable')) {
        return "Yes, I am a highly capable candidate who can handle any work with confidence and dedication. I'm committed to delivering quality results within deadlines and I leverage AI tools to optimize my workflow, enabling me to complete tasks efficiently and quickly.";
    }

    // Specific education responses
    if (lowerMessage.includes('college') || lowerMessage.includes('university') || lowerMessage.includes('education')) {
        return "I studied at Sri Manakula Vinayagar Engineering College with specialization in ECE (Electronics and Communication Engineering).";
    }

    if (lowerMessage.includes('school') || lowerMessage.includes('schooling') || lowerMessage.includes('higher secondary')) {
        return "I completed my schooling at Petit Seminaire Higher Secondary School.";
    }

    if (lowerMessage.includes('graduation year') || lowerMessage.includes('year of graduation') || lowerMessage.includes('when did you graduate') || lowerMessage.includes('graduated in')) {
        return "I graduated in 2025.";
    }

    if (lowerMessage.includes('school year') || lowerMessage.includes('when did you finish school') || lowerMessage.includes('schooling year')) {
        return "I finished school in 2021.";
    }

    // Social media links as buttons
    const socialLinks = [];
    if (lowerMessage.includes('linkedin') || lowerMessage.includes('linked in')) {
        socialLinks.push({
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sathiyaseelan-soundar-a012a821b/'
        });
    }
    if (lowerMessage.includes('github') || lowerMessage.includes('git hub')) {
        socialLinks.push({
            label: 'GitHub',
            url: 'https://github.com/sathiyaseelan-003'
        });
    }
    if (lowerMessage.includes('behance')) {
        socialLinks.push({
            label: 'Behance',
            url: 'https://www.behance.net/sathiyaseelans4'
        });
    }
    if (lowerMessage.includes('instagram') || lowerMessage.includes('insta')) {
        socialLinks.push({
            label: 'Instagram',
            url: 'https://www.instagram.com/sathiyaseelansundar?igsh=dGZkdHU2Y3N1N2l2'
        });
    }
    if (socialLinks.length > 0) {
        return {
            type: 'links',
            text: 'You can connect with me on these platforms:',
            links: socialLinks
        };
    }
    if (lowerMessage.includes('bye') || lowerMessage.includes('thank you') || lowerMessage.includes('see ya ')) {
        return "Goodbye! It was nice talking to you. Have a great day!";
    }
    // Professional topics - allow these
    const professionalTopics = {
        'education': "I finished my graduation in 2025 with specialization in ECE (Electronics and Communication Engineering) at Sri Manakula Vinayagar Engineering College. I completed my schooling at Petit Seminaire Higher Secondary School in 2021. I have a strong educational foundation and I'm continuously learning new technologies and staying updated with industry trends.",
        'project': "I've built several projects including a Bus Reservation System, Automated Prompt Generator, and Movie Ticket Booking App UI Design. You can view more details by clicking on the project cards above.",
        'contact': "You can reach me via email at sathiyaseelansoundar@gmail.com or connect with me on LinkedIn, GitHub, Instagram, and Behance. I'm always open to discussing new opportunities and collaborations.",
        'resume': "You can download my resume using the button in the Resume section. It contains detailed information about my skills, projects, and experience.",
        'portfolio': "This portfolio showcases my skills, projects, and professional background. Feel free to explore the different sections to learn more about my capabilities.",
        'work': "I'm a fresher with strong technical skills and a passion for development. I'm ready to contribute to any project with dedication and efficiency.",
        'job': "I'm actively seeking opportunities where I can apply my skills in Java, MySQL, Figma, n8n, PowerBI, MS Excel, JavaScript, HTML, and CSS. I'm confident in my ability to deliver quality work.",
        'hire': "I would be an excellent addition to any team. I bring strong technical skills, dedication to quality work, and the ability to complete tasks efficiently using modern tools and AI assistance."
    };

    for (const [key, response] of Object.entries(professionalTopics)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }

    // Personal/irrelevant topics - decline these
    const personalTopics = [
        'family', 'relationship', 'marriage', 'girlfriend', 'boyfriend', 'wife', 'husband',
        'religion', 'god', 'prayer', 'church', 'temple', 'mosque',
        'finance', 'money', 'salary', 'income', 'wealth', 'rich', 'poor',
        'politics', 'government', 'election', 'vote', 'political',
        'personal', 'private', 'age', 'birthday', 'address', 'phone number',
        'hobby', 'favorite', 'like', 'love', 'hate', 'dislike',
        'food', 'movie', 'music', 'sport', 'game', 'entertainment'
    ];

    for (const topic of personalTopics) {
        if (lowerMessage.includes(topic)) {
            return "I can only answer questions related to my skills, experience, education, and portfolio. Please ask me about my professional background instead.";
        }
    }

    // Default response for unclear questions
    return "I'm an AI assistant for this portfolio. I can help you learn about my skills, experience, education, projects, and contact information. What would you like to know about my professional background?";
}

// Cursor trail effect
function setupCursorTrail() {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let prevX = 0, prevY = 0;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        const dx = trailX - prevX;
        const dy = trailY - prevY;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        cursorTrail.style.setProperty('--cursor-angle', angle + 'deg');

        cursorTrail.style.left = trailX - 13 + 'px';
        cursorTrail.style.top = trailY - 13 + 'px';

        prevX = trailX;
        prevY = trailY;

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
}

// Initialize fade animation after page load
window.addEventListener('load', function () {
    setupFadeAnimation();
    // Video background is fixed and doesn't need parallax
});

// Fade in/out animation for hero title
function setupFadeAnimation() {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        // Start with opacity 0
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';

        // Fade in after a short delay
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);

        // Optional: Add a subtle pulse effect after fade in
        setTimeout(() => {
            heroTitle.style.animation = 'gentlePulse 3s ease-in-out infinite';
        }, 2000);
    }
}

// Video background is fixed and doesn't need parallax effects
// The video background remains static while content scrolls over it

// Smooth reveal animation for elements
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function () {
    revealElements();
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add reveal class to elements that should animate
document.addEventListener('DOMContentLoaded', function () {
    const elementsToReveal = document.querySelectorAll('.skill-card, .project-card, .contact-card');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });
});

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded {
        animation: fadeIn 1s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log(`
🚀 Portfolio Website Loaded Successfully!

Features included:
✅ Glassmorphism design
✅ Smooth scrolling navigation
✅ Interactive project modals
✅ AI chatbot interface
✅ Cursor trail effect
✅ Responsive design
✅ Scroll animations
✅ Skill bar animations

Customize your content by editing:
- Personal information in HTML
- Project data in script.js
- Styling in style.css

Happy coding! 🎨
`);

// Export functions for potential external use
window.PortfolioApp = {
    openProjectModal,
    closeModal,
    addChatMessage,
    generateAIResponse
};