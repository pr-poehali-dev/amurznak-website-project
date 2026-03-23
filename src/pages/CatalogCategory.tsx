import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const categoryData: Record<string, {
  title: string;
  desc: string;
  items: { title: string; size: string; material: string; price: string }[];
}> = {
  "info-stands": {
    title: "Информационные стенды",
    desc: "Настенные и напольные информационные стенды для размещения документов, приказов, объявлений. Изготовление в любых размерах.",
    items: [
      { title: "Стенд настенный А4 (1 карман)", size: "А4", material: "ПВХ, алюминий", price: "от 1 200 руб." },
      { title: "Стенд настенный А3 (2 кармана)", size: "А3", material: "ПВХ, алюминий", price: "от 1 800 руб." },
      { title: "Стенд настенный (4 кармана А4)", size: "600×800 мм", material: "ПВХ, алюминий", price: "от 2 400 руб." },
      { title: "Стенд настенный (6 карманов А4)", size: "800×1000 мм", material: "ПВХ, алюминий", price: "от 3 200 руб." },
      { title: "Стенд напольный мобильный", size: "600×900 мм", material: "Металл, ПВХ", price: "от 5 500 руб." },
      { title: "Стенд нестандартный (под заказ)", size: "Любой", material: "По запросу", price: "По запросу" },
    ],
  },
  "consumer-corner": {
    title: "Уголок потребителя",
    desc: "Готовые комплекты уголка потребителя для магазинов, аптек, сервисных организаций. Соответствие законодательству.",
    items: [
      { title: "Уголок потребителя базовый", size: "400×600 мм", material: "ПВХ, оргстекло", price: "от 2 500 руб." },
      { title: "Уголок потребителя расширенный", size: "600×800 мм", material: "ПВХ, оргстекло", price: "от 3 800 руб." },
      { title: "Уголок потребителя с карманами", size: "800×1000 мм", material: "ПВХ, оргстекло", price: "от 5 200 руб." },
      { title: "Папка-уголок потребителя", size: "А4", material: "ПВХ", price: "от 890 руб." },
    ],
  },
  "labor-safety": {
    title: "Стенды по охране труда",
    desc: "Информационные стенды и плакаты по охране труда для предприятий и организаций.",
    items: [
      { title: "Стенд 'Охрана труда' базовый", size: "600×900 мм", material: "ПВХ, алюминий", price: "от 1 800 руб." },
      { title: "Стенд 'Охрана труда' расширенный", size: "900×1200 мм", material: "ПВХ, алюминий", price: "от 3 200 руб." },
      { title: "Плакаты по охране труда (комплект)", size: "А2", material: "Бумага, ламинат", price: "от 1 200 руб." },
      { title: "Стенд 'Уголок по охране труда'", size: "800×1000 мм", material: "ПВХ, алюминий", price: "от 2 800 руб." },
    ],
  },
  "fire-safety": {
    title: "Стенды по пожарной безопасности",
    desc: "Знаки, таблички и стенды пожарной безопасности согласно требованиям ГОСТ Р 12.4.026.",
    items: [
      { title: "Знак пожарной безопасности", size: "200×200 мм", material: "Самоклейка, ПВХ", price: "от 80 руб." },
      { title: "Табличка 'Не загромождать'", size: "300×100 мм", material: "ПВХ", price: "от 150 руб." },
      { title: "Стенд 'Пожарная безопасность'", size: "600×900 мм", material: "ПВХ, алюминий", price: "от 2 200 руб." },
      { title: "Комплект знаков для офиса", size: "Разные", material: "ПВХ, металл", price: "от 800 руб." },
    ],
  },
  "door-signs": {
    title: "Таблички на двери",
    desc: "Офисные таблички с названием отдела, кабинета, должности руководителя. Различные материалы и оформление.",
    items: [
      { title: "Табличка акриловая стандартная", size: "200×60 мм", material: "Акрил", price: "от 350 руб." },
      { title: "Табличка металлическая", size: "200×60 мм", material: "Металл", price: "от 550 руб." },
      { title: "Табличка ПВХ", size: "200×60 мм", material: "ПВХ", price: "от 250 руб." },
      { title: "Табличка нестандартного размера", size: "Любой", material: "По выбору", price: "По запросу" },
    ],
  },
  "work-hours": {
    title: "Режим работы",
    desc: "Таблички и вывески с режимом работы для магазинов, офисов, государственных организаций.",
    items: [
      { title: "Табличка режима работы ПВХ", size: "200×100 мм", material: "ПВХ", price: "от 450 руб." },
      { title: "Табличка режима работы акрил", size: "250×120 мм", material: "Акрил", price: "от 680 руб." },
      { title: "Вывеска с режимом работы", size: "400×150 мм", material: "Металл, акрил", price: "от 1 200 руб." },
    ],
  },
  "navigation": {
    title: "Навигация",
    desc: "Указатели направлений, поэтажные планы, навигационные таблички для зданий и территорий.",
    items: [
      { title: "Указатель направления настенный", size: "300×100 мм", material: "ПВХ, металл", price: "от 600 руб." },
      { title: "Стрелка-указатель", size: "200×80 мм", material: "ПВХ, металл", price: "от 400 руб." },
      { title: "Поэтажный план эвакуации", size: "А3", material: "ПВХ", price: "от 800 руб." },
      { title: "Система навигации (комплект)", size: "Разные", material: "По выбору", price: "По запросу" },
    ],
  },
  "kits": {
    title: "Информационные комплекты под ключ",
    desc: "Полный комплект информационного оформления для организаций любого типа.",
    items: [
      { title: "Комплект для магазина", size: "Разные", material: "ПВХ, акрил", price: "от 5 000 руб." },
      { title: "Комплект для офиса", size: "Разные", material: "Акрил, металл", price: "от 6 500 руб." },
      { title: "Комплект для клиники", size: "Разные", material: "ПВХ, акрил", price: "от 8 000 руб." },
      { title: "Комплект для предприятия", size: "Разные", material: "Металл, ПВХ", price: "от 12 000 руб." },
    ],
  },
};

export default function CatalogCategory() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? categoryData[slug] : null;

  if (!data) {
    return (
      <Layout>
        <div className="container mx-auto px-4 max-w-7xl py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Категория не найдена</h1>
          <Link to="/catalog" className="text-primary hover:underline text-sm">← Вернуться в каталог</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-foreground">{data.title}</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">{data.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{data.desc}</p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="bg-white border border-border rounded overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Наименование</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Размер</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Материал</th>
                  <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Цена</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                    <td className="px-5 py-4 font-medium text-foreground">{item.title}</td>
                    <td className="px-5 py-4 text-muted-foreground hidden md:table-cell">{item.size}</td>
                    <td className="px-5 py-4 text-muted-foreground hidden lg:table-cell">{item.material}</td>
                    <td className="px-5 py-4 text-right font-semibold text-primary">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-border rounded p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Нужен нестандартный размер или материал?</p>
              <p className="text-xs text-muted-foreground">Изготовим по вашим параметрам — оставьте заявку</p>
            </div>
            <Link
              to="/contacts"
              className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-accent/90 transition-colors text-center shrink-0"
            >
              Запросить расчёт
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Link to="/catalog" className="text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all font-medium">
            ← Вернуться в каталог
          </Link>
        </div>
      </section>
    </Layout>
  );
}