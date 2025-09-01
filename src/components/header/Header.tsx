// /src/components/header/Header.tsx
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <a href="/">Homepage</a>
        </h1>

        <nav className="nav-links">
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
