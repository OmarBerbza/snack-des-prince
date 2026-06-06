import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Crown, Menu, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCart } from "../store/CartContext.jsx";
import TranslationButton from "./TranslationButton.jsx";

const navItems = [
  { to: "/", labelKey: "nav.home" },
  { to: "/menu", labelKey: "nav.menu" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/contact", labelKey: "nav.contact" },
];

function Layout({ children }) {
  const { t } = useTranslation();
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
            <Crown className="crown" size={20} />
            <span>
              Coin des <span>Princes</span>
            </span>
            <Crown className="crown" size={20} />
          </Link>
          <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(item.labelKey)}
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
              <span>{t("nav.cart")}</span>
              <span className="cart-badge">{cartCount}</span>
            </Link>
            <button
              className="hamburger"
              type="button"
              aria-label={t("nav.menu")}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <TranslationButton />
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4 className="footer-brand">
              Coin des <span>Princes</span>
            </h4>
            <p>{t("footer.text")}</p>
          </div>
          <div>
            <h4>{t("footer.navigation")}</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{t(item.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t("footer.contact")}</h4>
            <ul>
              <li>{t("footer.location")}</li>
              <li>06 00 00 00 00</li>
              <li>{t("footer.takeaway")}</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          &copy; {t("footer.rights")} (By Omar Berbza)
        </div>
      </footer>
    </div>
  );
}

export default Layout;
