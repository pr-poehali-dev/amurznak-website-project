import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tight">АМУРЗНАК</span>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Производство информационных стендов и знаков для бизнеса и организаций
            </p>
            <p className="mt-4 text-sm text-white/60">
              г. Благовещенск, Амурская область
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Каталог</h4>
            <ul className="space-y-2">
              {[
                { label: "Информационные стенды", href: "/catalog/info-stands" },
                { label: "Уголок потребителя", href: "/catalog/consumer-corner" },
                { label: "Охрана труда", href: "/catalog/labor-safety" },
                { label: "Пожарная безопасность", href: "/catalog/fire-safety" },
                { label: "Таблички на двери", href: "/catalog/door-signs" },
                { label: "Навигация", href: "/catalog/navigation" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Компания</h4>
            <ul className="space-y-2">
              {[
                { label: "О компании", href: "/about" },
                { label: "Портфолио", href: "/portfolio" },
                { label: "Готовые решения", href: "/solutions" },
                { label: "Доставка и монтаж", href: "/delivery" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+74212000000" className="text-sm text-white/60 hover:text-white transition-colors">
                  +7 (4212) 00-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@amurznak.ru" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@amurznak.ru
                </a>
              </li>
              <li className="text-sm text-white/60">
                г. Благовещенск
              </li>
            </ul>
            <Link
              to="/contacts"
              className="mt-5 btn-primary !py-2 !px-4 !text-sm !min-h-[38px]"
            >
              Оставить заявку
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2024 Амурзнак. Все права защищены.
          </p>
          <p className="text-xs text-white/40">
            amurznak.ru
          </p>
        </div>
      </div>
    </footer>
  );
}