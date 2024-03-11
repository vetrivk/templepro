class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <header>
          <a href="#" class="logo">Develo<span>pe</span>r..</a>
          <ul class="navlist">
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <div class="bx bx-menu" id="menu-icon"></div>
        </header>`;
  }
}

// Make sure the element's name contains a hyphen
customElements.define("special.header", SpecialHeader);

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <footer>
              <p>&copy; 2024 Design By Jeya Surya</p>
          </footer> `;
  }
}

// Again, ensure the custom element's name is valid
customElements.define("special-footer", SpecialFooter);
