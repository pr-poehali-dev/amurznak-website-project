import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const ГОРОД = "Благовещенске";
const КОМПАНИЯ = "Амурзнак";
const ТЕЛЕФОН = "+7 (4162) 00-00-00";

const catalogCategories = [
  {
    title: "Информационные стенды",
    desc: "Универсальные настенные и напольные стенды для размещения документов, приказов и объявлений",
    href: "/catalog/info-stands",
    icon: "LayoutDashboard",
  },
  {
    title: "Уголок потребителя",
    desc: "Готовые комплекты для соблюдения требований Закона о защите прав потребителей",
    href: "/catalog/consumer-corner",
    icon: "FileText",
  },
  {
    title: "Стенды по охране труда",
    desc: "Информационные стенды и плакаты по охране труда для предприятий и организаций",
    href: "/catalog/labor-safety",
    icon: "ShieldCheck",
  },
  {
    title: "Стенды по пожарной безопасности",
    desc: "Знаки, таблички и стенды согласно требованиям МЧС и ГОСТ Р 12.4.026",
    href: "/catalog/fire-safety",
    icon: "Flame",
  },
  {
    title: "Таблички на двери",
    desc: "Таблички с названием кабинета, отдела или должностью руководителя",
    href: "/catalog/door-signs",
    icon: "DoorOpen",
  },
  {
    title: "Режим работы",
    desc: "Таблички и вывески с режимом работы для магазинов, офисов и организаций",
    href: "/catalog/work-hours",
    icon: "Clock",
  },
  {
    title: "Навигация",
    desc: "Указатели направлений, поэтажные планы и навигационные системы для зданий",
    href: "/catalog/navigation",
    icon: "Navigation",
  },
  {
    title: "Комплекты под ключ",
    desc: "Полное информационное оформление объекта в одном заказе",
    href: "/catalog/kits",
    icon: "Package",
  },
];

const advantages = [
  {
    icon: "FileCheck",
    title: "Макет и расчёт в день обращения",
    desc: "Подготовим 2–3 варианта расчёта после получения размеров или фото места установки",
  },
  {
    icon: "Layers",
    title: "Типовые и индивидуальные решения",
    desc: "Стенды, таблички и навигация в одном заказе — стандартные и под ваши размеры",
  },
  {
    icon: "Building2",
    title: "Работаем с ИП, ООО и учреждениями",
    desc: "Безналичный расчёт, полный пакет закрывающих документов",
  },
  {
    icon: "Truck",
    title: "Доставка и монтаж",
    desc: "Доставляем и устанавливаем по Благовещенску и всей Амурской области",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                Производство в {ГОРОД}е
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                Информационные стенды, таблички и навигация под ключ в {ГОРОД}е
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-3">
                Изготавливаем информационные стенды, уголки потребителя, стенды по охране труда, таблички на двери, режим работы и внутреннюю навигацию для магазинов, офисов, клиник, ТСЖ, учебных и коммерческих объектов.
              </p>
              <p className="text-sm font-medium text-foreground mb-8">
                Макет и расчёт в день обращения. Типовые решения от 2 дней. Доставка и монтаж.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  to="/contacts"
                  className="bg-primary text-white font-medium px-6 py-3 rounded hover:bg-primary/90 transition-colors text-center"
                >
                  Рассчитать стоимость
                </Link>
                <Link
                  to="/catalog"
                  className="border border-border text-foreground font-medium px-6 py-3 rounded hover:bg-secondary transition-colors text-center"
                >
                  Получить каталог и цены
                </Link>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Отправьте размеры, фото места установки или описание задачи — подготовим 2–3 варианта расчёта.
              </p>
            </div>
            <div className="w-full h-80 md:h-96 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm border border-dashed border-border">
              Фото производства / готовой продукции
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Каталог продукции</h2>
              <p className="text-sm text-muted-foreground mt-1">Типовые и нестандартные решения по вашим размерам</p>
            </div>
            <Link
              to="/catalog"
              className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all shrink-0"
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
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Готовые решения по типу бизнеса</h2>
              <p className="text-sm text-muted-foreground mt-1">Подобрали комплекты для разных сегментов — можно дополнить под вашу задачу</p>
            </div>
            <Link
              to="/solutions"
              className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all shrink-0"
            >
              Все решения <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                to={sol.href}
                className="border border-border bg-white rounded px-4 py-3.5 text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors"
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white mb-2">Нужны стенды, таблички или навигация?</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Отправьте размеры, фото места установки или описание задачи — подготовим расчёт в день обращения.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-white/60">
                {["Типовые и индивидуальные решения", "Стенды, таблички и навигация в одном заказе", "Работаем с ИП, ООО и учреждениями", "Помогаем с макетом и подбором комплектации", "Доставка и монтаж"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Icon name="Check" size={12} className="text-white/50" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/contacts"
                className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-white/90 transition-colors text-center"
              >
                Рассчитать стоимость
              </Link>
              <a
                href={`tel:${ТЕЛЕФОН.replace(/\D/g, "").replace(/^/, "+")}`}
                className="border border-white/30 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors text-center"
              >
                {ТЕЛЕФОН}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
