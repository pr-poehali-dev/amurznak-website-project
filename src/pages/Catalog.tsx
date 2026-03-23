import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const categories = [
  {
    title: "Информационные стенды",
    desc: "Универсальные стенды для размещения документов, приказов, объявлений. Настенные, напольные, мобильные варианты.",
    href: "/catalog/info-stands",
    icon: "LayoutDashboard",
    count: "от 1 200 руб.",
  },
  {
    title: "Уголок потребителя",
    desc: "Готовые комплекты для соблюдения требований Закона о защите прав потребителей.",
    href: "/catalog/consumer-corner",
    icon: "FileText",
    count: "от 2 500 руб.",
  },
  {
    title: "Стенды по охране труда",
    desc: "Информационные стенды и плакаты по охране труда для производственных предприятий.",
    href: "/catalog/labor-safety",
    icon: "ShieldCheck",
    count: "от 1 800 руб.",
  },
  {
    title: "Стенды по пожарной безопасности",
    desc: "Знаки, таблички и стенды по пожарной безопасности согласно требованиям МЧС.",
    href: "/catalog/fire-safety",
    icon: "Flame",
    count: "от 800 руб.",
  },
  {
    title: "Таблички на двери",
    desc: "Офисные таблички с названием отдела, кабинета, должности руководителя.",
    href: "/catalog/door-signs",
    icon: "DoorOpen",
    count: "от 350 руб.",
  },
  {
    title: "Режим работы",
    desc: "Таблички и вывески с режимом работы для магазинов, офисов и организаций.",
    href: "/catalog/work-hours",
    icon: "Clock",
    count: "от 450 руб.",
  },
  {
    title: "Навигация",
    desc: "Указатели направлений, поэтажные планы, навигационные системы для зданий.",
    href: "/catalog/navigation",
    icon: "Navigation",
    count: "от 600 руб.",
  },
  {
    title: "Информационные комплекты под ключ",
    desc: "Полный комплект информационного оформления для любого типа организации.",
    href: "/catalog/kits",
    icon: "Package",
    count: "от 5 000 руб.",
  },
];

export default function Catalog() {
  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Каталог</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Каталог продукции</h1>
          <p className="text-muted-foreground max-w-2xl">
            Производим информационные стенды, таблички и знаки для офисов, магазинов, производств и других организаций. Стандартные размеры и изготовление по вашим требованиям.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-card transition-all group flex flex-col shadow-sm-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon name={cat.icon} size={20} className="text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{cat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{cat.count}</span>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="bg-secondary rounded-xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Не нашли нужную позицию?</h3>
              <p className="text-sm text-muted-foreground">Изготовим по вашим размерам и требованиям — оставьте заявку</p>
            </div>
            <Link
              to="/contacts"
              className="btn-primary text-center shrink-0"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}