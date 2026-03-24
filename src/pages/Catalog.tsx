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
        <div className="site-container py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Каталог</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Каталог продукции</h1>
          <p className="text-muted-foreground max-w-2xl text-base">
            Производим информационные стенды, таблички и знаки для офисов, магазинов, производств и других организаций. Стандартные размеры и изготовление по вашим требованиям.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] section-py">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="bg-white border border-[#E5E7EB] rounded-[14px] p-6 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)] transition-all group flex flex-col"
                style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon name={cat.icon} size={20} className="text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
                  <span className="text-sm font-bold text-[#174A84]">{cat.count}</span>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="site-container py-12">
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
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