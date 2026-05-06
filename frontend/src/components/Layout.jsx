import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/CartContext.jsx";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "A propos" },
  { to: "/contact", label: "Contact" },
];

function Layout({ children }) {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <header className="site-nav">
        <nav className="container nav-inner">
          <Link
            to="/"
            className="nav-logo"
            onClick={() => setMobileOpen(false)}
          >
            <span className="crown">👑</span>
            <span>
              Snack des <span>Princes</span>
            </span>
            <span className="crown">👑</span>
          </Link>
          <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <Link
              to="/cart"
              className="nav-cart"
              onClick={() => setMobileOpen(false)}
            >
              <ShoppingCart size={16} />
              <span>Panier</span>
              <span className="cart-badge">{cartCount}</span>
            </Link>
            <button
              className="hamburger"
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4 className="footer-brand">
              👑 Snack des <span>Princes</span> 👑
            </h4>
            <p>
              Le meilleur snack pizza de Massa, avec service rapide et prix
              imbattables.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Massa, Maroc</li>
              <li>06 03 08 33 35</li>
              <li>Sur place et a emporter</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          © 2026 Snack des Princes - Tous droits reserves
        </div>
      </footer>
    </div>
  );
}

export default Layout;
