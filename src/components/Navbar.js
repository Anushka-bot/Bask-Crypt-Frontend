import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2><a href="/" className="home-link">BaskCrypt</a></h2>
      <ul>
        <li>
          <a href="/about">
            <button type="button" className="links">
              About
            </button>
          </a>
        </li>
        <li>
          <a href="/product">
            <button type="button" className="links">
              Product
            </button>
          </a>
        </li>
        <li>
          <a href="/learn">
            <button type="button" className="links">
              Learn
            </button>
          </a>
        </li>
        <li>
          <a href="/company">
            <button type="button" className="links">
              Company
            </button>
          </a>
        </li>
        <li>
          <a href="/signup">
            <button type="button" className="prices">
              SignUp
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
