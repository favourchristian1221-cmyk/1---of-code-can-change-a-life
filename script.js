// ====================================
// SCRIPT.JS - Main Application Logic
// ====================================

// ====================================
// CONSTANTS
// ====================================

const CODE_LINES = [
    "console.log('Hello, World!');",
    "const dream = buildIt();",
    "while (learning) { grow(); }",
    "function changeTheWorld() {}",
    "if (you_can_code) { achieve(); }",
    "let passion = 100;",
    "code.transform(life);",
    "create something amazing today();",
];

const ANIMATION_CONFIG = {
    storyShowTrigger: 0.5,
    cardShowTrigger: 0.3,
    observerOptions: {
        threshold: [0.3, 0.5],
        rootMargin: "0px 0px -50px 0px",
    },
};

const DOM_SELECTORS = {
    themeToggle: "#theme-toggle",
    discoverBtn: "#discover-btn",
    codeElement: "#code",
    story: ".story",
    cards: ".card",
    body: "body",
};

// ====================================
// THEME TOGGLE
// ====================================

/**
 * Initialize theme toggle functionality
 * Persists theme preference to localStorage
 */
function initializeThemeToggle() {
    const themeToggle = document.querySelector(DOM_SELECTORS.themeToggle);
    const body = document.querySelector(DOM_SELECTORS.body);

    if (!themeToggle) return;

    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // Add click event listener
    themeToggle.addEventListener("click", toggleTheme);
    themeToggle.addEventListener("keydown", (e) => {
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
    const body = document.querySelector(DOM_SELECTORS.body);
    const themeToggle = document.querySelector(DOM_SELECTORS.themeToggle);
    const currentTheme = body.classList.contains("light-mode")
        ? "dark"
        : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
}

/**
 * Apply theme to the document
 * @param {string} theme - 'dark' or 'light'
 */
function applyTheme(theme) {
    const body = document.querySelector(DOM_SELECTORS.body);
    const themeToggle = document.querySelector(DOM_SELECTORS.themeToggle);

    if (!body || !themeToggle) return;

    if (theme === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute("aria-pressed", "true");
    } else {
        body.classList.remove("light-mode");
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute("aria-pressed", "false");
    }
}

// ====================================
// ANIMATED CODE TYPING
// ====================================

/**
 * Animate code typing effect
 */
async function animateCodeTyping() {
    const codeElement = document.querySelector(DOM_SELECTORS.codeElement);
    if (!codeElement) return;

    // Select random code line
    const randomCode =
        CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];

    // Clear previous text
    codeElement.textContent = "";

    // Type out each character
    for (let i = 0; i < randomCode.length; i++) {
        codeElement.textContent += randomCode[i];
        await sleep(50); // Delay between characters
    }

    // Pause before changing to next line
    await sleep(3000);

    // Delete characters
    for (let i = randomCode.length; i > 0; i--) {
        codeElement.textContent = randomCode.substring(0, i - 1);
        await sleep(30);
    }

    // Recursive call to loop animation
    animateCodeTyping();
}

/**
 * Utility function to create delays
 * @param {number} ms - Milliseconds to sleep
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ====================================
// SCROLL ANIMATIONS
// ====================================

/**
 * Initialize scroll-triggered animations
 * Uses Intersection Observer API for better performance
 */
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            } else {
                // Remove class when scrolling back up (optional)
                // entry.target.classList.remove("show");
            }
        });
    }, ANIMATION_CONFIG.observerOptions);

    // Observe story section
    const story = document.querySelector(DOM_SELECTORS.story);
    if (story) {
        observer.observe(story);
    }

    // Observe all card elements
    const cards = document.querySelectorAll(DOM_SELECTORS.cards);
    cards.forEach((card) => {
        observer.observe(card);
    });
}

// ====================================
// BUTTON INTERACTIONS
// ====================================

/**
 * Initialize discover button functionality
 */
function initializeDiscoverButton() {
    const discoverBtn = document.querySelector(DOM_SELECTORS.discoverBtn);
    if (!discoverBtn) return;

    discoverBtn.addEventListener("click", scrollToSection);
    discoverBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            scrollToSection();
        }
    });
}

/**
 * Smooth scroll to story section
 */
function scrollToSection() {
    const story = document.querySelector(DOM_SELECTORS.story);
    if (story) {
        story.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ====================================
// SMOOTH SCROLL ENHANCEMENT
// ====================================

/**
 * Add smooth scroll behavior to all internal links
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// ====================================
// PERFORMANCE OPTIMIZATIONS
// ====================================

/**
 * Debounce function for throttling events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
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

/**
 * Throttle function for rate-limiting events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// ====================================
// PAGE PERFORMANCE MONITORING
// ====================================

/**
 * Log performance metrics (optional - remove in production)
 */
function logPerformanceMetrics() {
    if (window.performance) {
        window.addEventListener("load", () => {
            const perfData = window.performance.timing;
            const pageLoadTime =
                perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);

            // Optional: Send to analytics
            // sendAnalytics('pageLoadTime', pageLoadTime);
        });
    }
}

// ====================================
// INITIALIZATION
// ====================================

/**
 * Initialize all functionality when DOM is ready
 */
function initializeApp() {
    // Initialize theme toggle
    initializeThemeToggle();

    // Initialize code typing animation
    animateCodeTyping();

    // Initialize scroll animations
    initializeScrollAnimations();

    // Initialize discover button
    initializeDiscoverButton();

    // Initialize smooth scroll for links
    initializeSmoothScroll();

    // Log performance metrics
    logPerformanceMetrics();

    // Add any additional initialization here
    console.log("✨ App initialized successfully!");
}

// ====================================
// RUN ON DOM READY
// ====================================

// Ensure script runs when DOM is fully loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    // DOM is already loaded (happens when script is deferred or async)
    initializeApp();
}

// ====================================
// UTILITIES & HELPERS (Optional)
// ====================================

/**
 * Add a utility to easily track custom events
 * Usage: trackEvent('button_click', { button_name: 'discover' })
 */
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Connect to your analytics service here
}

/**
 * Simple localStorage utility
 */
const StorageUtil = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error("Storage error:", e);
        }
    },
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error("Storage error:", e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error("Storage error:", e);
        }
    },
};
