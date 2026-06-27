/* ==========================================
   One Line Can Change a Life
   script.js
========================================== */

// ====================================
// DOM CACHE - Reduce repeated queries
// ====================================

const DOMCache = {
    title: null,
    code: null,
    story: null,
    themeToggle: null,
    body: null,
    footer: null,
};

/**
 * Cache all DOM elements on load
 */
function cacheDOM() {
    DOMCache.title = document.getElementById("title");
    DOMCache.code = document.getElementById("code");
    DOMCache.story = document.getElementById("story");
    DOMCache.themeToggle = document.getElementById("theme-toggle");
    DOMCache.body = document.body;
    DOMCache.footer = document.querySelector(".footer");
}

// ====================================
// TYPING ANIMATION - Optimized
// ====================================

const titleText = "One Line of Code Can Change a Life";
const codeText = 'console.log("Hello, World!");';

/**
 * Optimized typing effect using array join instead of string concatenation
 * @param {HTMLElement} element - Target DOM element
 * @param {string} text - Text to type
 * @param {number} speed - Delay in ms between characters
 */
async function typeText(element, text, speed) {
    if (!element) return;
    
    const chars = text.split('');
    element.textContent = '';
    
    for (let i = 0; i < chars.length; i++) {
        element.textContent = chars.slice(0, i + 1).join('');
        await sleep(speed);
    }
}

/**
 * Utility sleep function for async delays
 * @param {number} ms - Milliseconds to wait
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Initialize typing animations
 */
async function initializeTyping() {
    await typeText(DOMCache.title, titleText, 70);
    await typeText(DOMCache.code, codeText, 40);
}

// ====================================
// SCROLL TO SECTION
// ====================================

/**
 * Smooth scroll to story section
 */
function scrollToStory() {
    if (DOMCache.story) {
        DOMCache.story.scrollIntoView({ behavior: "smooth" });
    }
}

// ====================================
// THEME TOGGLE - Enhanced with Accessibility
// ====================================

/**
 * Initialize theme toggle with localStorage persistence
 */
function initializeThemeToggle() {
    if (!DOMCache.themeToggle) return;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // Add click and keyboard listeners
    DOMCache.themeToggle.addEventListener("click", toggleTheme);
    DOMCache.themeToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme();
        }
    });
}

/**
 * Toggle between dark and light mode
 */
function toggleTheme() {
    const isLight = DOMCache.body.classList.contains("light-mode");
    const newTheme = isLight ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}

/**
 * Apply theme to document
 * @param {string} theme - 'dark' or 'light'
 */
function applyTheme(theme) {
    if (!DOMCache.body || !DOMCache.themeToggle) return;

    if (theme === "light") {
        DOMCache.body.classList.add("light-mode");
        DOMCache.themeToggle.innerHTML = "☀️";
        DOMCache.themeToggle.setAttribute("aria-label", "Switch to dark mode");
        DOMCache.themeToggle.setAttribute("aria-pressed", "true");
    } else {
        DOMCache.body.classList.remove("light-mode");
        DOMCache.themeToggle.innerHTML = "🌙";
        DOMCache.themeToggle.setAttribute("aria-label", "Switch to light mode");
        DOMCache.themeToggle.setAttribute("aria-pressed", "false");
    }
}

// ====================================
// SCROLL ANIMATIONS - Intersection Observer
// ====================================

/**
 * Initialize scroll-triggered animations
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe story and card elements
    document.querySelectorAll(".story, .card").forEach((element) => {
        observer.observe(element);
    });
}

// ====================================
// FOOTER - Dynamic Year
// ====================================

/**
 * Add dynamic year to footer
 */
function initializeFooter() {
    if (!DOMCache.footer) return;
    
    const year = new Date().getFullYear();
    const footerContent = document.createElement("p");
    footerContent.style.marginTop = "20px";
    footerContent.textContent = `© ${year} • Built by Your Name`;
    DOMCache.footer.appendChild(footerContent);
}

// ====================================
// PERFORMANCE MONITORING
// ====================================

/**
 * Log performance metrics using modern Performance API
 */
function logPerformanceMetrics() {
    if (window.performance && window.performance.getEntriesByType) {
        window.addEventListener("load", () => {
            const navTiming = performance.getEntriesByType("navigation")[0];
            if (navTiming) {
                const pageLoadTime = navTiming.loadEventEnd - navTiming.navigationStart;
                console.log(`⚡ Page load time: ${pageLoadTime.toFixed(2)}ms`);
            }
        });
    }
}

// ====================================
// ERROR HANDLING
// ====================================

/**
 * Safely execute function with error handling
 * @param {Function} func - Function to execute
 * @param {string} name - Function name for logging
 */
function safeExecute(func, name) {
    try {
        func();
    } catch (error) {
        console.error(`Error in ${name}:`, error);
    }
}

// ====================================
// APPLICATION INITIALIZATION
// ====================================

/**
 * Initialize all application features
 */
async function initializeApp() {
    try {
        // Cache DOM elements first
        cacheExecute();

        // Initialize features
        initializeThemeToggle();
        await initializeTyping();
        initializeScrollAnimations();
        initializeFooter();
        logPerformanceMetrics();

        // Log success
        console.log("✨ App initialized successfully!");
    } catch (error) {
        console.error("❌ Initialization error:", error);
    }
}

/**
 * Safe cache execution
 */
function cacheExecute() {
    try {
        cacheDOM();
    } catch (error) {
        console.error("Error caching DOM:", error);
    }
}

// ====================================
// RUN ON DOM READY
// ====================================

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}

// ====================================
// WELCOME MESSAGE
// ====================================

setTimeout(() => {
    console.log("🚀 Welcome to my first coding project!");
}, 1000);
