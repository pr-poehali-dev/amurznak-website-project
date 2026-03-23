import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const steps = [
  { step: "01", title: "Заявка", desc: "Оставьте заявку на сайте или позвоните нам" },
  { step: "02", title: "Согласование", desc: "Уточняем детали, размеры, материалы и сроки" },
  { step: "03", title: "Производство", desc: "Изготавливаем в срок от 1 до 7 рабочих дней" },
  { step: "04", title: "Доставка", desc: "Доставляем курьером или транспортной компанией" },
  { step: "05", title: "Монтаж", desc: "При необходимости устанавливаем на месте" },
];

const deliveryOptions = [
  {
    icon: "MapPin",
    title: "Самовывоз",
    desc: "Бесплатно. Забрать готовый заказ можно по адресу нашего производства в Благовещенске.",
    price: "Бесплатно",
  },
  {
    icon: "Truck",
    title: "Доставка по Благовещенску",
    desc: "Доставка курьером по городу. Стоимость зависит от адреса и веса заказа.",
    price: "от 300 руб.",
  },
  {
    icon: "Package",
    title: "Доставка по Амурской области",
    desc: "Отправляем транспортными компаниями. Упаковываем для сохранности при транспортировке.",
    price: "По тарифу ТК",
  },
  {
    icon: "Wrench",
    title: "Монтаж",
    desc: "Профессиональная установка стендов и табличек по Благовещенску и области.",
    price: "По запросу",
  },
];

export default function Delivery() {
  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Доставка и монтаж</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Доставка и монтаж</h1>
          <p className="text-muted-foreground max-w-2xl">
            Доставляем готовую продукцию по Благовещенску и всей Амурской области. Предоставляем услуги монтажа.
          </p>
        </div>
      </section>

      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <h2 className="text-xl font-bold text-foreground mb-8">Варианты получения</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryOptions.map((opt) => (
              <div key={opt.title} className="bg-white border border-border rounded p-5">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={opt.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{opt.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{opt.desc}</p>
                <span className="text-sm font-bold text-primary">{opt.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <h2 className="text-xl font-bold text-foreground mb-8">Как проходит работа</h2>
          <div className="flex flex-col md:flex-row gap-0">
            {steps.map((s, i) => (
              <div key={s.step} className="flex md:flex-col flex-1 relative">
                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-2 pb-6 md:pb-0 md:text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="bg-white border border-border rounded p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Сроки изготовления</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-primary mb-1">1–2 дня</p>
                <p className="text-sm text-muted-foreground">Таблички и знаки (стандартные позиции)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary mb-1">3–5 дней</p>
                <p className="text-sm text-muted-foreground">Информационные стенды и уголки потребителя</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary mb-1">5–10 дней</p>
                <p className="text-sm text-muted-foreground">Комплексные проекты и нестандартные решения</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Срочное изготовление возможно — уточняйте при оформлении заказа
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
