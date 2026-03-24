import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const ГОРОД = "Благовещенске";
const КОМПАНИЯ = "Амурзнак";
const ТЕЛЕФОН = "+7 (4162) 00-00-00";

const catalogCategories = [
  {
    title: "Информационные стенды",
    desc: "ПВХ 4–5 мм, карманы А4/А5. Настенные и напольные. Размер под заказ.",
    href: "/catalog/info-stands",
    icon: "LayoutDashboard",
    price: "от 1 200 ₽",
  },
  {
    title: "Уголок потребителя",
    desc: "Готовый комплект: карманы, таблички, заголовок. Соответствие законодательству.",
    href: "/catalog/consumer-corner",
    icon: "FileText",
    price: "от 2 500 ₽",
  },
  {
    title: "Стенды по охране труда",
    desc: "ПВХ, алюминиевый профиль. Размеры 600×900, 900×1200 мм и нестандарт.",
    href: "/catalog/labor-safety",
    icon: "ShieldCheck",
    price: "от 1 800 ₽",
  },
  {
    title: "Пожарная безопасность",
    desc: "Знаки, таблички, стенды по ГОСТ. Самоклейка, ПВХ, металл.",
    href: "/catalog/fire-safety",
    icon: "Flame",
    price: "от 80 ₽",
  },
  {
    title: "Таблички на двери",
    desc: "Акрил, металл, ПВХ. Размер 200×60 мм и нестандарт. Печать и гравировка.",
    href: "/catalog/door-signs",
    icon: "DoorOpen",
    price: "от 250 ₽",
  },
  {
    title: "Режим работы",
    desc: "ПВХ, акрил, металл. Стандартный формат или с вашим дизайном.",
    href: "/catalog/work-hours",
    icon: "Clock",
    price: "от 450 ₽",
  },
  {
    title: "Навигация",
    desc: "Указатели, поэтажные планы, эвакуационные схемы. По ГОСТ и под заказ.",
    href: "/catalog/navigation",
    icon: "Navigation",
    price: "от 400 ₽",
  },
  {
    title: "Оформление под ключ",
    desc: "Стенды, таблички, навигация в одном заказе. Замер, макет, монтаж.",
    href: "/catalog/kits",
    icon: "Package",
    price: "от 5 000 ₽",
  },
];

const heroFeatures = [
  { icon: "Zap", text: "Изготовление от 1 дня" },
  { icon: "FileText", text: "Макет перед производством" },
  { icon: "Package", text: "От 1 экземпляра" },
  { icon: "Truck", text: "Доставка по РФ" },
];

const advantages = [
  {
    icon: "Clock",
    title: "Изготовление от 1 дня",
    desc: "Типовые изделия — 1–2 дня. Сложные и нестандартные — по согласованию",
  },
  {
    icon: "FileCheck",
    title: "Макет и расчёт в день обращения",
    desc: "Пришлите размеры или фото — подготовим 2–3 варианта расчёта",
  },
  {
    icon: "Building2",
    title: "Работаем с ИП, ООО и учреждениями",
    desc: "Безналичный расчёт, полный пакет закрывающих документов",
  },
  {
    icon: "Truck",
    title: "Доставка и монтаж",
    desc: "Доставляем и устанавливаем по Благовещенску и Амурской области",
  },
];

const solutions = [
  {
    title: "Магазин или салон",
    desc: "Уголок потребителя, режим работы, таблички на кассу и входную зону.",
    href: "/solutions#shops",
    price: "от 12 000 ₽",
  },
  {
    title: "Офис",
    desc: "Информационные стенды, таблички кабинетов, указатели, оформление ресепшена.",
    href: "/solutions#offices",
    price: "от 22 000 ₽",
  },
  {
    title: "Клиника или медцентр",
    desc: "Стенд для пациентов, лицензии, режим работы, таблички кабинетов, навигация.",
    href: "/solutions#clinics",
    price: "от 45 000 ₽",
  },
  {
    title: "ТСЖ или управляющая компания",
    desc: "Стенды для жильцов, доска объявлений, таблички, указатели по подъездам.",
    href: "/solutions#hoa",
    price: "от 25 000 ₽",
  },
  {
    title: "Школа или учебный центр",
    desc: "Информационные стенды, расписание, таблички кабинетов, эвакуационные знаки.",
    href: "/solutions#education",
    price: "от 20 000 ₽",
  },
  {
    title: "Производство или склад",
    desc: "Охрана труда, пожарная безопасность, служебные таблички, указатели зон.",
    href: "/solutions#production",
    price: "от 18 000 ₽",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white border-b border-border">
        <div className="site-container py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Левая колонка */}
            <div>
              <p className="text-[#174A84] text-xs font-semibold uppercase tracking-widest mb-4">
                Производство в {ГОРОД}е · {КОМПАНИЯ}
              </p>
              <h1 className="font-bold text-foreground leading-tight mb-4">
                Информационные стенды, таблички, навигация и вывески для бизнеса и учреждений
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Изготовление от 1 дня, макет, монтаж и доставка по Амурской области и РФ
              </p>

              {/* Фичи */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                {heroFeatures.map((f) => (
                  <div key={f.text} className="flex items-center gap-2">
                    <Icon name={f.icon} size={15} className="text-[#174A84] shrink-0" />
                    <span className="text-sm text-foreground font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contacts" className="btn-primary text-center">
                  Рассчитать стоимость
                </Link>
                <Link to="/catalog" className="btn-outline text-center">
                  Смотреть каталог
                </Link>
              </div>
            </div>

            {/* Правая колонка — коллаж */}
            <div className="grid grid-cols-2 gap-3 h-[380px] md:h-[420px]">
              <div className="row-span-2 bg-[#F1F5F9] rounded-[14px] border border-[#E5E7EB] flex flex-col items-center justify-center gap-2 text-[#9CA3AF]">
                <Icon name="LayoutDashboard" size={32} className="text-[#CBD5E1]" />
                <span className="text-xs text-center px-4 leading-snug">Информационный стенд</span>
              </div>
              <div className="bg-[#F1F5F9] rounded-[14px] border border-[#E5E7EB] flex flex-col items-center justify-center gap-2 text-[#9CA3AF]">
                <Icon name="DoorOpen" size={24} className="text-[#CBD5E1]" />
                <span className="text-xs">Табличка</span>
              </div>
              <div className="bg-[#F1F5F9] rounded-[14px] border border-[#E5E7EB] flex flex-col items-center justify-center gap-2 text-[#9CA3AF]">
                <Icon name="Store" size={24} className="text-[#CBD5E1]" />
                <span className="text-xs">Вывеска</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#F8FAFC] border-b border-border">
        <div className="site-container section-py">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="bg-white border border-[#E5E7EB] rounded-[14px] p-5" style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
                <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={20} className="text-[#174A84]" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
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
              <p className="text-white/80 text-base leading-relaxed mb-5">
                Пришлите размеры, фото места или описание задачи — расчёт в день обращения.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                {["От 1 экземпляра", "ПВХ, акрил, металл, композит", "Работаем с ИП, ООО и учреждениями", "Полный пакет документов", "Доставка по РФ"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Icon name="Check" size={13} className="text-white/50" /> {t}
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