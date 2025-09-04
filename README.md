# Modern Portfolio Website

A stunning, modern portfolio website built with HTML, CSS, and JavaScript featuring glassmorphism design, smooth animations, and interactive elements.

## 🚀 Features

- **Glassmorphism Design**: Beautiful liquid glass effects throughout the site
- **Spline Background**: Ready for your 3D Spline embed code
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Project Modals**: Click on projects to see detailed information
- **AI Chatbot Interface**: Placeholder for AI integration (ready for your AI logic)
- **Cursor Trail Effect**: Futuristic glowing cursor trail
- **Modern Navigation**: Smooth scrolling with active section highlighting
- **Skill Bars**: Animated progress bars for your skills
- **Contact Integration**: Social media links and contact information

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**In `index.html`, replace the following:**

- **Name**: Replace "Your Name" with your actual name
- **Subtitle**: Change "Fresher" to your title/role
- **About Text**: Update the about section with your personal story
- **Contact Info**: Replace email, phone, and location
- **Social Links**: Update GitHub, LinkedIn, Twitter, Instagram URLs
- **Profile Image**: Replace the placeholder image with your photo

### 2. Projects

**In `script.js`, update the `projectsData` object:**

```javascript
const projectsData = {
    1: {
        title: "Your Project Name",
        image: "path/to/your/project/image.jpg",
        description: "Detailed description of your project...",
        technologies: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://your-live-demo.com",
        codeUrl: "https://github.com/yourusername/project"
    },
    // Add more projects...
};
```

**In `index.html`, update project cards:**
- Replace placeholder images with your project screenshots
- Update project titles and descriptions
- Modify technology tags

### 3. Skills

**In `index.html`, update the skills section:**
- Replace skill icons with your technologies
- Update skill names
- Adjust skill bar percentages in `data-width` attributes

### 4. Spline Background

**In `index.html`, replace the background placeholder:**

```html
<div id="spline-background">
    <!-- Replace this with your actual Spline embed code -->
    <iframe src="your-spline-embed-url" frameborder="0"></iframe>
</div>
```

### 5. Resume

**In `index.html`, update the resume section:**
- Replace `path/to/your/resume.pdf` with your actual resume file path
- Update the resume description

### 6. Styling Customization

**In `style.css`, you can customize:**
- Color scheme: Update the gradient colors throughout
- Fonts: Change the Google Fonts import
- Animations: Modify animation durations and effects
- Layout: Adjust spacing, sizes, and responsive breakpoints

### 7. AI Chatbot Integration

**In `script.js`, update the `generateAIResponse` function:**
- Replace placeholder responses with your actual information
- Integrate with your preferred AI service (OpenAI, etc.)
- Add more sophisticated response logic

## 🎯 Key Sections

1. **Hero Section**: Your name and introduction
2. **About Section**: Personal story and statistics
3. **Skills Section**: Technical skills with animated bars
4. **Projects Section**: Portfolio projects with modals
5. **Contact Section**: Social links and contact information
6. **Resume Section**: Download link for your resume

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🎨 Design Features

- **Glassmorphism**: Translucent elements with backdrop blur
- **Gradient Text**: Animated gradient text effects
- **Hover Effects**: Interactive hover animations
- **Scroll Animations**: Elements animate as you scroll
- **Smooth Transitions**: Fluid animations throughout
- **Modern Typography**: Clean, professional fonts

## 🚀 Getting Started

1. Download all files to your project folder
2. Open `index.html` in your browser
3. Start customizing with your personal information
4. Replace placeholder images with your content
5. Update the Spline background embed code
6. Deploy to your preferred hosting platform

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 Notes

- All placeholder content is clearly marked with comments
- The AI chatbot is ready for integration with your preferred AI service
- The design is optimized for performance and accessibility
- All animations are hardware-accelerated for smooth performance

## 🎉 Enjoy Your New Portfolio!

Your modern, professional portfolio is ready to showcase your skills and projects. The glassmorphism design and smooth animations will make a great impression on potential employers and clients.

Happy coding! 🚀

