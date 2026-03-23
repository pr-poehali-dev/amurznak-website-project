import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Каталог", href: "/catalog" },
  { label: "Готовые решения", href: "/solutions" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Цены", href: "/prices" },
  { label: "Доставка и монтаж", href: "/delivery" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary tracking-tight">АМУРЗНАК</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+74212000000"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              +7 (4212) 00-00-00
            </a>
            <Link
              to="/contacts"
              className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded hover:bg-accent/90 transition-colors"
            >
              Заказать
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-2 py-2.5 text-sm font-medium rounded transition-colors hover:bg-secondary ${
                    location.pathname === item.href
                      ? "text-primary bg-secondary"
                      : "text-foreground/70"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <a href="tel:+74212000000" className="text-sm font-semibold text-foreground">
                +7 (4212) 00-00-00
              </a>
              <Link
                to="/contacts"
                className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded text-center hover:bg-accent/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Заказать
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}