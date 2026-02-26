// js/components.js
// Defines two custom HTML elements: <main-header> and <main-footer>
// Every page uses these so navigation and footer are consistent.

// ===== HEADER COMPONENT =====
export class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <div class="logo">
                        <a href="index.html">
                            <h1><i class="fas fa-globe-asia"></i> LBEF Global Connect</h1>
                        </a>
                    </div>

                    <!-- Hamburger button — only visible on mobile -->
                    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <ul class="nav-links" id="navLinks">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="pages/general/about.html">About</a></li>
                        <li><a href="pages/events/home.html">Events</a></li>
                        <li><a href="pages/academic/partnership.html">Academics</a></li>
                        <li><a href="pages/membership/contact.html">Contact</a></li>
                        <li><a href="pages/membership/register.html" class="btn" style="padding:8px 16px; font-size:0.85rem;">Join Club</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // Mobile nav toggle logic
        const toggle = this.querySelector('#navToggle');
        const navLinks = this.querySelector('#navLinks');
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
}

customElements.define('main-header', Header);

// ===== FOOTER COMPONENT =====
export class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-main">

                    <!-- Column 1: Brand info -->
                    <div class="footer-brand footer-col">
                        <div class="logo-text">
                            <i class="fas fa-globe-asia"></i> LBEF Global Connect
                        </div>
                        <p>
                            A student club of Lord Buddha Education Foundation dedicated to
                            fostering global connections through the LBEF–APU Malaysia partnership.
                        </p>
                        <div class="footer-social">
                            <a href="#" class="social-btn" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-btn" title="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-btn" title="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-btn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <!-- Column 2: Quick links -->
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="pages/general/about.html">About Us</a></li>
                            <li><a href="pages/academic/partnership.html">APU Partnership</a></li>
                            <li><a href="pages/academic/transfer.html">Credit Transfer</a></li>
                            <li><a href="pages/events/home.html">Upcoming Events</a></li>
                            <li><a href="pages/membership/register.html">Join the Club</a></li>
                            <li><a href="pages/academic/alumni.html">Alumni Stories</a></li>
                        </ul>
                    </div>

                    <!-- Column 3: Contact info -->
                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Minbhawan, Kathmandu<br>Nepal</span>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+977-1-4XXXXXX</span>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>global@lbef.edu.np</span>
                        </div>
                        <div class="footer-contact-item">
                            <i class="fas fa-clock"></i>
                            <span>Sun–Fri, 9am–5pm</span>
                        </div>
                    </div>

                    <!-- Column 4: Newsletter signup -->
                    <div class="footer-col">
                        <h4>Stay Updated</h4>
                        <p style="color:rgba(255,255,255,0.6); font-size:0.88rem; margin:0 0 1rem;">
                            Subscribe for the latest news, events, and opportunities.
                        </p>
                        <input
                            type="email"
                            class="footer-newsletter-input"
                            placeholder="Your email address"
                        >
                        <button class="btn" style="width:100%;" onclick="alert('Subscribed! We will be in touch.')">
                            Subscribe
                        </button>
                    </div>

                </div>

                <!-- Bottom bar -->
                <div class="footer-bottom">
                    <p>&copy; 2026 LBEF Global Connect. All rights reserved.</p>
                    <div class="footer-bottom-links">
                        <a href="pages/general/legal.html">Privacy Policy</a>
                        <a href="pages/general/legal.html">Terms of Service</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('main-footer', Footer);
