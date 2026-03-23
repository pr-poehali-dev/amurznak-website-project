import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Какой минимальный заказ?",
    a: "Минимальный заказ — от 1 штуки. Принимаем как единичные заказы, так и крупные тиражи.",
  },
  {
    q: "Изготавливаете по нестандартным размерам?",
    a: "Да, мы изготавливаем продукцию по любым размерам и требованиям заказчика. Стоимость и срок рассчитываются индивидуально.",
  },
  {
    q: "Какие материалы используете?",
    a: "ПВХ, акрил (оргстекло), металл (алюминий, нержавеющая сталь), фанера, МДФ. Выбор материала зависит от требований и условий эксплуатации.",
  },
  {
    q: "Как долго изготавливается заказ?",
    a: "Стандартные таблички и знаки — от 1 рабочего дня. Информационные стенды — 3–5 рабочих дней. Комплексные проекты — 5–10 рабочих дней. Срочное изготовление возможно по согласованию.",
  },
  {
    q: "Работаете с юридическими лицами?",
    a: "Да, работаем с юридическими лицами и ИП по безналичному расчёту, предоставляем все необходимые закрывающие документы.",
  },
  {
    q: "Проводите монтаж?",
    a: "Да, предоставляем услуги монтажа по Благовещенску и Амурской области. Стоимость монтажа рассчитывается в зависимости от объёма работ.",
  },
  {
    q: "Доставляете в другие города области?",
    a: "Да, доставляем по всей Амурской области транспортными компаниями. Тщательно упаковываем продукцию для сохранности при доставке.",
  },
  {
    q: "Как сделать заказ?",
    a: "Оставьте заявку на сайте, позвоните или напишите нам. Уточним детали, рассчитаем стоимость и подтвердим сроки в течение 1 рабочего дня.",
  },
  {
    q: "Соответствует ли продукция требованиям ГОСТ?",
    a: "Да, наша продукция изготавливается в соответствии с требованиями нормативных документов (ГОСТ, отраслевые стандарты, требования МЧС и Роспотребнадзора).",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">FAQ</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Частые вопросы</h1>
          <p className="text-muted-foreground max-w-2xl">
            Ответы на наиболее частые вопросы. Если не нашли нужного — звоните или пишите.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-border rounded overflow-hidden divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="text-sm font-medium text-foreground">{faq.q}</span>
                    <Icon
                      name={openIndex === i ? "ChevronUp" : "ChevronDown"}
                      size={16}
                      className="text-muted-foreground shrink-0"
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-border rounded p-6 text-center">
              <p className="text-sm font-semibold text-foreground mb-1">Остались вопросы?</p>
              <p className="text-xs text-muted-foreground mb-4">Свяжитесь с нами — ответим быстро</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+74212000000"
                  className="border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded hover:bg-secondary transition-colors"
                >
                  +7 (4212) 00-00-00
                </a>
                <Link
                  to="/contacts"
                  className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-accent/90 transition-colors"
                >
                  Написать нам
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}