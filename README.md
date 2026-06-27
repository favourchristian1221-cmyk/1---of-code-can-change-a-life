# One Line of Code Can Change a Life ✨

A beautiful, interactive portfolio website showcasing the transformative power of coding. This project demonstrates modern web development practices with smooth animations, theme toggling, and engaging user interactions.

## 🌟 Features

- **🌙 Dark/Light Theme Toggle** - Persistent theme preference saved to localStorage
- **✨ Smooth Animations** - Scroll-triggered animations using Intersection Observer
- **💻 Typing Effect** - Dynamic typing animations for title and code snippets
- **📱 Responsive Design** - Works seamlessly on all devices
- **⚡ Performance Optimized** - Efficient DOM caching and modern JavaScript practices
- **♿ Accessible** - Keyboard navigation and ARIA labels for better accessibility
- **🎨 Modern UI** - Clean, inspiring design with smooth transitions

## 📸 Live Demo

🔗 **[View Live](https://favourchristian1221-cmyk.github.io/1---of-code-can-change-a-life/)**

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and gradients
- **Vanilla JavaScript** - No dependencies, pure JS with best practices
- **Intersection Observer API** - Performance-optimized scroll animations

## 📁 Project Structure

```
1---of-code-can-change-a-life/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with themes
├── script.js           # Application logic
├── README.md           # Project documentation
└── .gitignore          # Git ignore rules
```

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/favourchristian1221-cmyk/1---of-code-can-change-a-life.git
cd 1---of-code-can-change-a-life
```

### Open Locally
Simply open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

## 💡 Key Features Explained

### Theme Toggle with Persistence
- Automatically saves your theme preference to localStorage
- Loads your preferred theme on next visit
- Smooth transitions between dark and light modes

### Optimized Typing Animation
- Uses async/await for clean, readable code
- Efficient string handling with array operations
- No infinite recursion (prevents memory issues)

### Scroll Animations
- Intersection Observer API for performance
- Animations trigger when elements enter viewport
- Smooth fade-in effects on cards and story sections

### Performance Monitoring
- Tracks page load time with modern Performance API
- Logs metrics to browser console
- Helps identify performance bottlenecks

## 🎯 Responsive Design

- ✅ Mobile-first approach
- ✅ Optimized for phones, tablets, and desktops
- ✅ Touch-friendly interactive elements
- ✅ Flexible grid layouts

## ♿ Accessibility

- Keyboard navigation support (Tab, Enter, Space)
- ARIA labels for screen readers
- High contrast theme support
- Semantic HTML structure

## 📊 Performance Optimizations

1. **DOM Caching** - Reduces repeated DOM queries
2. **Async/Await** - Cleaner asynchronous code
3. **Intersection Observer** - Efficient scroll detection
4. **LocalStorage** - Fast theme persistence
5. **Error Handling** - Graceful error management

## 🔧 Customization

### Change Typing Text
Edit the constants in `script.js`:
```javascript
const titleText = "Your Custom Title Here";
const codeText = 'your.code.here();';
```

### Modify Colors & Themes
Edit `style.css` to customize:
- Color schemes
- Animation speeds
- Font families
- Spacing and sizing

### Update Footer
Change the footer text in `script.js`:
```javascript
footerContent.textContent = `© ${year} • Built by Your Name`;
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages (Recommended - Free)

1. Go to your repository **Settings**
2. Navigate to **Pages** section
3. Select **Deploy from a branch**
4. Choose `main` branch
5. Click **Save**
6. Your site will be live at: `https://favourchristian1221-cmyk.github.io/1---of-code-can-change-a-life`

### Alternative Hosting

- **Netlify** - Drag & drop deployment
- **Vercel** - Git-integrated hosting
- **Firebase Hosting** - Google-backed hosting

## 📝 Code Highlights

### Optimized Typing Effect
```javascript
async function typeText(element, text, speed) {
    const chars = text.split('');
    element.textContent = '';
    
    for (let i = 0; i < chars.length; i++) {
        element.textContent = chars.slice(0, i + 1).join('');
        await sleep(speed);
    }
}
```

### Theme Persistence
```javascript
function toggleTheme() {
    const isLight = DOMCache.body.classList.contains("light-mode");
    const newTheme = isLight ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}
```

### Scroll Animations with Intersection Observer
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Favour Christian**
- GitHub: [@favourchristian1221-cmyk](https://github.com/favourchristian1221-cmyk)
- Email: favourchristian1221@gmail.com

## 🙏 Acknowledgments

- Inspired by the power of coding to change lives
- Built with best practices in modern web development
- Thanks to everyone who believes in the transformative power of code

## 📞 Support

If you have any questions or suggestions, feel free to:
- Open an issue on GitHub
- Reach out via email
- Check the code comments for implementation details

---

**Made with ❤️ to inspire the next generation of developers**

Remember: *One Line of Code Can Change a Life* ✨
