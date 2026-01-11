// js/components.js
// Header Component
export class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
                <div class="logo">
                    <a href="/index.html" style="color:white; text-decoration:none;">
                        <h1><i class="fas fa-globe-asia"></i> LBEF Global</h1>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/pages/general/about.html">About</a></li>
                    <li><a href="/pages/events/home.html">Events</a></li>
                    <li><a href="/pages/academic/partnership.html">Academics</a></li>
                    <li><a href="/pages/membership/contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
  }
}

customElements.define('main-header', Header);

// Footer Component
export class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        <footer>
            <p>&copy; 2026 LBEF Global Connect. Partnered with APU Malaysia.</p>
        </footer>

    `;
  }
}

customElements.define('main-footer', Footer);
