import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const ГОРОД = "Благовещенске";
const КОМПАНИЯ = "Амурзнак";
const ТЕЛЕФОН = "+7 (4162) 00-00-00";

const catalogCategories = [
  {
    title: "Информационные стенды",
    desc: "Стенды с карманами А4 и А5 для офисов, магазинов, школ, клиник и административных помещений.",
    href: "/catalog/info-stands",
    icon: "LayoutDashboard",
    price: "от 4 500 ₽",
  },
  {
    title: "Уголок потребителя",
    desc: "Готовые решения для магазинов, салонов, ПВЗ, офисов и сферы услуг.",
    href: "/catalog/consumer-corner",
    icon: "FileText",
    price: "от 6 000 ₽",
  },
  {
    title: "Стенды по охране труда",
    desc: "Информационные стенды для офиса, производства, склада и служебных помещений.",
    href: "/catalog/labor-safety",
    icon: "ShieldCheck",
    price: "от 6 500 ₽",
  },
  {
    title: "Пожарная безопасность",
    desc: "Стенды и информационные панели для обязательного размещения.",
    href: "/catalog/fire-safety",
    icon: "Flame",
    price: "от 7 000 ₽",
  },
  {
    title: "Таблички на двери",
    desc: "Кабинетные, служебные, интерьерные и навигационные таблички.",
    href: "/catalog/door-signs",
    icon: "DoorOpen",
    price: "от 600 ₽",
  },
  {
    title: "Режим работы",
    desc: "Таблички и наклейки для входной группы, стекла и дверей.",
    href: "/catalog/work-hours",
    icon: "Clock",
    price: "от 1 500 ₽",
  },
  {
    title: "Навигация",
    desc: "Указатели и внутренняя навигация для офисов, клиник, учебных центров и коммерческих помещений.",
    href: "/catalog/navigation",
    icon: "Navigation",
    price: "от 1 800 ₽",
  },
  {
    title: "Оформление под ключ",
    desc: "Стенды, таблички, режим работы, навигация, замер и монтаж.",
    href: "/catalog/kits",
    icon: "Package",
    price: "от 22 000 ₽",
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
  {
    title: "Для магазинов и салонов",
    desc: "Уголок потребителя, режим работы, таблички и базовая навигация для точки обслуживания.",
    href: "/solutions#shops",
    price: "от 12 000 ₽",
  },
  {
    title: "Для офисов",
    desc: "Информационные стенды, кабинетные таблички, навигация, указатели и оформление входной зоны.",
    href: "/solutions#offices",
    price: "от 22 000 ₽",
  },
  {
    title: "Для клиник и медцентров",
    desc: "Стенд для пациентов, лицензии, режим работы, таблички кабинетов и внутренняя навигация.",
    href: "/solutions#clinics",
    price: "от 45 000 ₽",
  },
  {
    title: "Для ТСЖ и УК",
    desc: "Стенды для жильцов, доски объявлений, таблички, указатели и служебная информация.",
    href: "/solutions#hoa",
    price: "от 25 000 ₽",
  },
  {
    title: "Для школ и учебных центров",
    desc: "Информационные стенды, расписание, кабинетные таблички и навигация по помещению.",
    href: "/solutions#education",
    price: "от 20 000 ₽",
  },
  {
    title: "Для производств и складов",
    desc: "Стенды по охране труда, пожарной безопасности, служебные таблички и указатели.",
    href: "/solutions#production",
    price: "от 18 000 ₽",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="site-container py-16 md:py-24">
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
                <Link to="/contacts" className="btn-primary text-center">
                  Рассчитать стоимость
                </Link>
                <Link to="/catalog" className="btn-outline text-center">
                  Получить каталог и цены
                </Link>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Отправьте размеры, фото места установки или описание задачи — подготовим 2–3 варианта расчёта.
              </p>
            </div>
            <div className="w-full h-80 md:h-96 bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm border border-dashed border-border">
              Фото производства / готовой продукции
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#F8FAFC] border-b border-border">
        <div className="site-container section-py">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
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
        <div className="site-container section-py">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-foreground">Популярная продукция</h2>
            <Link
              to="/catalog"
              className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all shrink-0"
            >
              Весь каталог <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mb-10">
            Базовые решения для обязательной информации, внутреннего оформления и навигации.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {catalogCategories.map((cat) => (
              <div
                key={cat.href}
                className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)] transition-all flex flex-col"
                style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}
              >
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <Icon name={cat.icon} size={18} className="text-foreground/50" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{cat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{cat.desc}</p>
                <p className="text-sm font-bold text-foreground mb-3">{cat.price}</p>
                <div className="flex gap-2">
                  <Link
                    to={cat.href}
                    className="flex-1 text-center text-xs font-medium border border-border rounded-lg px-3 py-2 text-foreground/70 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    Подробнее
                  </Link>
                  <Link
                    to="/contacts"
                    className="flex-1 text-center text-xs font-medium bg-[#174A84] text-white rounded-lg px-3 py-2 hover:bg-[#123B6A] transition-colors"
                  >
                    Рассчитать
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready solutions */}
      <section className="bg-[#F8FAFC] border-b border-border">
        <div className="site-container section-py">
          <h2 className="text-2xl font-bold text-foreground mb-3">Готовые решения для бизнеса и учреждений</h2>
          <p className="text-sm text-muted-foreground mb-10">
            Подбираем не отдельное изделие, а комплект под конкретный объект и задачу.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                to={sol.href}
                className="border border-[#E5E7EB] bg-white rounded-[14px] p-6 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)] transition-all group"
                style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}
              >
                <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{sol.desc}</p>
                <p className="text-sm font-bold text-primary">{sol.price}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/solutions" className="btn-primary">
              Подобрать комплект для объекта
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="site-container section-py">
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
                className="inline-flex items-center justify-center bg-white text-[#174A84] font-semibold text-base px-6 py-3 rounded-[10px] min-h-[50px] hover:bg-white/90 transition-colors text-center"
              >
                Рассчитать стоимость
              </Link>
              <a
                href={`tel:${ТЕЛЕФОН.replace(/\D/g, "").replace(/^/, "+")}`}
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium text-base px-6 py-3 rounded-[10px] min-h-[50px] hover:bg-white/10 transition-colors text-center"
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