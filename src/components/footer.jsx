function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are a team dedicated to delivering high-quality solutions that
            enhance user experience and innovation.
          </p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f">F</i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">T</i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">I</i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in">L</i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
