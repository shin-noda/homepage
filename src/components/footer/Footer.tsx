// /src/components/footer/Footer.tsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/shin-noda" target="_blank" rel="noopener noreferrer">GitHub</a>

          <a href="https://linkedin.com/in/shinnosuke-noda" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Shin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
