import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const priceGroups = [
  {
    title: "Таблички и знаки",
    items: [
      { name: "Табличка ПВХ (200×60 мм)", price: "от 250 руб." },
      { name: "Табличка акриловая (200×60 мм)", price: "от 350 руб." },
      { name: "Табличка металлическая (200×60 мм)", price: "от 550 руб." },
      { name: "Знак пожарной безопасности", price: "от 80 руб." },
      { name: "Знак охраны труда", price: "от 90 руб." },
      { name: "Вывеска режима работы", price: "от 450 руб." },
    ],
  },
  {
    title: "Информационные стенды",
    items: [
      { name: "Стенд А4 (1 карман)", price: "от 1 200 руб." },
      { name: "Стенд А3 (2 кармана)", price: "от 1 800 руб." },
      { name: "Стенд 600×800 мм (4 кармана)", price: "от 2 400 руб." },
      { name: "Стенд 800×1000 мм (6 карманов)", price: "от 3 200 руб." },
      { name: "Стенд напольный мобильный", price: "от 5 500 руб." },
      { name: "Стенд нестандартный", price: "По запросу" },
    ],
  },
  {
    title: "Уголок потребителя",
    items: [
      { name: "Базовый (400×600 мм)", price: "от 2 500 руб." },
      { name: "Расширенный (600×800 мм)", price: "от 3 800 руб." },
      { name: "С карманами (800×1000 мм)", price: "от 5 200 руб." },
      { name: "Папка-уголок А4", price: "от 890 руб." },
    ],
  },
  {
    title: "Готовые комплекты",
    items: [
      { name: "Комплект для магазина / салона", price: "от 4 500 руб." },
      { name: "Комплект для офиса", price: "от 6 000 руб." },
      { name: "Комплект для клиники", price: "от 8 000 руб." },
      { name: "Комплект для ТСЖ / УК", price: "от 7 500 руб." },
      { name: "Комплект для школы / учебного центра", price: "от 9 000 руб." },
      { name: "Комплект для производства / склада", price: "от 12 000 руб." },
    ],
  },
];

const factors = [
  { icon: "Layers", text: "Количество позиций в заказе" },
  { icon: "Ruler", text: "Нестандартные размеры" },
  { icon: "PaintBucket", text: "Выбор материала и покрытия" },
  { icon: "Clock", text: "Срочность изготовления" },
];

export default function Prices() {
  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Цены</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Цены</h1>
          <p className="text-muted-foreground max-w-2xl">
            Актуальные цены на основные позиции. Окончательная стоимость рассчитывается индивидуально с учётом тиража, материалов и сложности изготовления.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {priceGroups.map((group) => (
              <div key={group.title} className="bg-white border border-border rounded overflow-hidden">
                <div className="px-5 py-4 border-b border-border bg-secondary">
                  <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {group.items.map((item, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 text-foreground/80">{item.name}</td>
                        <td className="px-5 py-3 text-right font-semibold text-primary whitespace-nowrap">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border border-border rounded p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">На стоимость влияет</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {factors.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <Icon name={f.icon} size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="bg-primary rounded p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Хотите точный расчёт?</h3>
              <p className="text-white/70 text-sm">Пришлите список нужных позиций — рассчитаем стоимость за 1 рабочий день</p>
            </div>
            <Link
              to="/contacts"
              className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-white/90 transition-colors text-center shrink-0"
            >
              Запросить расчёт
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
