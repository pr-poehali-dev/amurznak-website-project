import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const categoryData: Record<string, {
  title: string;
  desc: string;
  items: {
    title: string;
    size: string;
    material: string;
    price: string;
    badge?: string;
  }[];
}> = {
  "info-stands": {
    title: "Информационные стенды",
    desc: "Настенные и напольные информационные стенды для размещения документов, приказов, объявлений. Изготовление в любых размерах.",
    items: [
      { title: "Стенд настенный А4 (1 карман)", size: "А4", material: "ПВХ 4 мм, алюминий", price: "от 1 200 ₽", badge: "изготовление от 1 дня" },
      { title: "Стенд настенный А3 (2 кармана)", size: "А3", material: "ПВХ 4 мм, алюминий", price: "от 1 800 ₽" },
      { title: "Стенд настенный (4 кармана А4)", size: "600×800 мм", material: "ПВХ 4 мм, алюминий", price: "от 2 400 ₽" },
      { title: "Стенд настенный (6 карманов А4)", size: "800×1000 мм", material: "ПВХ 4 мм, алюминий", price: "от 3 200 ₽", badge: "популярное" },
      { title: "Стенд напольный мобильный", size: "600×900 мм", material: "Металл, ПВХ", price: "от 5 500 ₽" },
      { title: "Стенд нестандартный (под заказ)", size: "Любой размер", material: "По запросу", price: "По запросу" },
    ],
  },
  "consumer-corner": {
    title: "Уголок потребителя",
    desc: "Готовые комплекты уголка потребителя для магазинов, аптек, сервисных организаций. Соответствие законодательству.",
    items: [
      { title: "Уголок потребителя базовый", size: "400×600 мм", material: "ПВХ, оргстекло", price: "от 2 500 ₽", badge: "изготовление от 1 дня" },
      { title: "Уголок потребителя расширенный", size: "600×800 мм", material: "ПВХ, оргстекло", price: "от 3 800 ₽", badge: "популярное" },
      { title: "Уголок потребителя с карманами", size: "800×1000 мм", material: "ПВХ, оргстекло", price: "от 5 200 ₽" },
      { title: "Папка-уголок потребителя", size: "А4", material: "ПВХ", price: "от 890 ₽" },
    ],
  },
  "labor-safety": {
    title: "Стенды по охране труда",
    desc: "Информационные стенды и плакаты по охране труда для предприятий и организаций.",
    items: [
      { title: "Стенд «Охрана труда» базовый", size: "600×900 мм", material: "ПВХ, алюминий", price: "от 1 800 ₽", badge: "изготовление от 1 дня" },
      { title: "Стенд «Охрана труда» расширенный", size: "900×1200 мм", material: "ПВХ, алюминий", price: "от 3 200 ₽" },
      { title: "Плакаты по охране труда (комплект)", size: "А2", material: "Бумага, ламинат", price: "от 1 200 ₽" },
      { title: "Стенд «Уголок по охране труда»", size: "800×1000 мм", material: "ПВХ, алюминий", price: "от 2 800 ₽", badge: "популярное" },
    ],
  },
  "fire-safety": {
    title: "Стенды по пожарной безопасности",
    desc: "Знаки, таблички и стенды пожарной безопасности согласно требованиям ГОСТ Р 12.4.026.",
    items: [
      { title: "Знак пожарной безопасности", size: "200×200 мм", material: "Самоклейка, ПВХ", price: "от 80 ₽", badge: "изготовление от 1 дня" },
      { title: "Табличка «Не загромождать»", size: "300×100 мм", material: "ПВХ", price: "от 150 ₽" },
      { title: "Стенд «Пожарная безопасность»", size: "600×900 мм", material: "ПВХ, алюминий", price: "от 2 200 ₽" },
      { title: "Комплект знаков для офиса", size: "Разные", material: "ПВХ, металл", price: "от 800 ₽", badge: "популярное" },
    ],
  },
  "door-signs": {
    title: "Таблички на двери",
    desc: "Офисные таблички с названием отдела, кабинета, должности руководителя. Различные материалы и оформление.",
    items: [
      { title: "Табличка акриловая стандартная", size: "200×60 мм", material: "Акрил", price: "от 350 ₽", badge: "изготовление от 1 дня" },
      { title: "Табличка металлическая", size: "200×60 мм", material: "Металл", price: "от 550 ₽" },
      { title: "Табличка ПВХ", size: "200×60 мм", material: "ПВХ", price: "от 250 ₽" },
      { title: "Табличка нестандартного размера", size: "Любой", material: "По выбору", price: "По запросу" },
    ],
  },
  "work-hours": {
    title: "Режим работы",
    desc: "Таблички и вывески с режимом работы для магазинов, офисов, государственных организаций.",
    items: [
      { title: "Табличка режима работы ПВХ", size: "200×100 мм", material: "ПВХ", price: "от 450 ₽", badge: "изготовление от 1 дня" },
      { title: "Табличка режима работы акрил", size: "250×120 мм", material: "Акрил", price: "от 680 ₽" },
      { title: "Вывеска с режимом работы", size: "400×150 мм", material: "Металл, акрил", price: "от 1 200 ₽" },
    ],
  },
  "navigation": {
    title: "Навигация",
    desc: "Указатели направлений, поэтажные планы, навигационные таблички для зданий и территорий.",
    items: [
      { title: "Указатель направления настенный", size: "300×100 мм", material: "ПВХ, металл", price: "от 600 ₽" },
      { title: "Стрелка-указатель", size: "200×80 мм", material: "ПВХ, металл", price: "от 400 ₽", badge: "изготовление от 1 дня" },
      { title: "Поэтажный план эвакуации", size: "А3", material: "ПВХ", price: "от 800 ₽" },
      { title: "Система навигации (комплект)", size: "Разные", material: "По выбору", price: "По запросу" },
    ],
  },
  "kits": {
    title: "Информационные комплекты под ключ",
    desc: "Полный комплект информационного оформления для организаций любого типа.",
    items: [
      { title: "Комплект для магазина", size: "Разные", material: "ПВХ, акрил", price: "от 5 000 ₽" },
      { title: "Комплект для офиса", size: "Разные", material: "Акрил, металл", price: "от 6 500 ₽", badge: "популярное" },
      { title: "Комплект для клиники", size: "Разные", material: "ПВХ, акрил", price: "от 8 000 ₽" },
      { title: "Комплект для предприятия", size: "Разные", material: "Металл, ПВХ", price: "от 12 000 ₽" },
    ],
  },
};

export default function CatalogCategory() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? categoryData[slug] : null;

  if (!data) {
    return (
      <Layout>
        <div className="site-container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Категория не найдена</h1>
          <Link to="/catalog" className="text-primary hover:underline text-sm">← Вернуться в каталог</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Шапка категории */}
      <section className="bg-white border-b border-border">
        <div className="site-container py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-foreground">{data.title}</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">{data.title}</h1>
          <p className="text-muted-foreground max-w-2xl text-base">{data.desc}</p>
        </div>
      </section>

      {/* Сетка карточек */}
      <section className="bg-[#F8FAFC] section-py">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.items.map((item, i) => (
              <div key={i} className="product-card">
                {/* Фото-заглушка */}
                <div className="product-card__img">
                  <div className="flex flex-col items-center justify-center text-[#D1D5DB] gap-2 h-full">
                    <Icon name="Image" size={36} className="text-[#D1D5DB]" />
                    <span className="text-xs text-[#9CA3AF]">фото товара</span>
                  </div>
                </div>

                <div className="product-card__body">
                  {item.badge && (
                    <span className="product-card__badge">{item.badge}</span>
                  )}
                  <h3 className="product-card__title">{item.title}</h3>
                  <p className="product-card__specs">
                    {item.size !== "Любой" && item.size !== "Разные" && (
                      <span className="block">{item.size}</span>
                    )}
                    <span className="block">{item.material}</span>
                  </p>

                  <div className="product-card__footer">
                    <span className="product-card__price">{item.price}</span>
                    <Link
                      to="/contacts"
                      className="btn-primary !text-sm !py-2 !px-4 !min-h-[38px]"
                    >
                      Рассчитать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Блок CTA */}
          <div className="mt-10 bg-white border border-border rounded-[14px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm-soft">
            <div>
              <p className="text-base font-semibold text-foreground mb-1">Нужен нестандартный размер или материал?</p>
              <p className="text-sm text-muted-foreground">Изготовим по вашим параметрам — оставьте заявку</p>
            </div>
            <Link
              to="/contacts"
              className="btn-primary text-center shrink-0"
            >
              Запросить расчёт
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
