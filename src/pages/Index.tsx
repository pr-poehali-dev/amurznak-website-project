import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const catalogCategories = [
  {
    title: "Информационные стенды",
    desc: "Универсальные стенды для размещения документов и объявлений",
    href: "/catalog/info-stands",
    icon: "LayoutDashboard",
  },
  {
    title: "Уголок потребителя",
    desc: "Комплекты для соблюдения требований законодательства",
    href: "/catalog/consumer-corner",
    icon: "FileText",
  },
  {
    title: "Охрана труда",
    desc: "Стенды и плакаты по охране труда для производства",
    href: "/catalog/labor-safety",
    icon: "ShieldCheck",
  },
  {
    title: "Пожарная безопасность",
    desc: "Знаки и стенды по пожарной безопасности",
    href: "/catalog/fire-safety",
    icon: "Flame",
  },
  {
    title: "Таблички на двери",
    desc: "Офисные таблички и указатели для помещений",
    href: "/catalog/door-signs",
    icon: "DoorOpen",
  },
  {
    title: "Режим работы",
    desc: "Таблички и вывески с режимом работы",
    href: "/catalog/work-hours",
    icon: "Clock",
  },
  {
    title: "Навигация",
    desc: "Указатели и навигационные системы для зданий",
    href: "/catalog/navigation",
    icon: "Navigation",
  },
  {
    title: "Комплекты под ключ",
    desc: "Информационные комплекты для любого типа бизнеса",
    href: "/catalog/kits",
    icon: "Package",
  },
];

const advantages = [
  {
    icon: "Factory",
    title: "Собственное производство",
    desc: "Изготовление на современном оборудовании в Благовещенске",
  },
  {
    icon: "Ruler",
    title: "Любые размеры и форматы",
    desc: "Стандартные и нестандартные решения по вашим размерам",
  },
  {
    icon: "Truck",
    title: "Доставка по Амурской области",
    desc: "Доставляем и монтируем по всей Амурской области",
  },
  {
    icon: "BadgeCheck",
    title: "Соответствие ГОСТ",
    desc: "Продукция соответствует требованиям нормативных документов",
  },
];

const solutions = [
  { title: "Для магазинов и салонов", href: "/solutions#shops" },
  { title: "Для офисов", href: "/solutions#offices" },
  { title: "Для клиник", href: "/solutions#clinics" },
  { title: "Для ТСЖ и УК", href: "/solutions#hoa" },
  { title: "Для школ и учебных центров", href: "/solutions#education" },
  { title: "Для производств и складов", href: "/solutions#production" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Производство в Благовещенске
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Информационные стенды и знаки для бизнеса
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Изготавливаем информационные стенды, уголки потребителя, таблички и навигационные системы. Соответствие нормативным требованиям, доставка и монтаж по Амурской области.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/catalog"
                className="bg-primary text-white font-medium px-6 py-3 rounded hover:bg-primary/90 transition-colors text-center"
              >
                Смотреть каталог
              </Link>
              <Link
                to="/contacts"
                className="border border-border text-foreground font-medium px-6 py-3 rounded hover:bg-secondary transition-colors text-center"
              >
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="w-full h-64 md:h-80 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm border border-dashed border-border">
            Фото производства / готовой продукции
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <h2 className="text-2xl font-bold text-foreground mb-10">Почему выбирают Амурзнак</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground">Каталог продукции</h2>
            <Link
              to="/catalog"
              className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
            >
              Весь каталог <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {catalogCategories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="bg-white border border-border rounded p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 rounded bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Icon name={cat.icon} size={18} className="text-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{cat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready solutions */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground">Готовые решения по типу бизнеса</h2>
            <Link
              to="/solutions"
              className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
            >
              Все решения <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                to={sol.href}
                className="border border-border rounded px-4 py-3.5 text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                {sol.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Нужны информационные стенды?</h2>
              <p className="text-white/70 text-sm">
                Оставьте заявку — рассчитаем стоимость и сроки изготовления в течение 1 рабочего дня
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contacts"
                className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-white/90 transition-colors text-center"
              >
                Оставить заявку
              </Link>
              <a
                href="tel:+74212000000"
                className="border border-white/30 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors text-center"
              >
                +7 (4212) 00-00-00
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
