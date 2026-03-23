import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const projects = [
  {
    title: "Торговый центр «Мегамолл»",
    category: "Навигация",
    desc: "Разработка и изготовление навигационной системы для торгового центра: поэтажные планы, указатели, стрелки направлений.",
  },
  {
    title: "Поликлиника №3, г. Благовещенск",
    category: "Медицина",
    desc: "Полный комплект информационного оформления: таблички на кабинеты, навигация по этажам, уголок потребителя.",
  },
  {
    title: "Завод строительных материалов",
    category: "Производство",
    desc: "Стенды по охране труда, знаки пожарной безопасности, производственная навигация и предупреждающие знаки.",
  },
  {
    title: "Сеть аптек «Фармация»",
    category: "Торговля",
    desc: "Уголки потребителя, таблички с режимом работы, информационные стенды для 12 аптек сети.",
  },
  {
    title: "Управляющая компания «Наш дом»",
    category: "ТСЖ / УК",
    desc: "Информационные стенды для жильцов, таблички на входных группах, поэтажные планы эвакуации.",
  },
  {
    title: "Гимназия №1, г. Благовещенск",
    category: "Образование",
    desc: "Таблички на кабинеты, стенды с расписанием, навигационные указатели, знаки безопасности.",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Портфолио</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Портфолио</h1>
          <p className="text-muted-foreground max-w-2xl">
            Реализованные проекты для организаций Амурской области. Более 500 выполненных заказов за 10 лет работы.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div key={i} className="bg-white border border-border rounded overflow-hidden hover:shadow-sm transition-shadow">
                <div className="w-full h-48 bg-muted flex items-center justify-center text-xs text-muted-foreground border-b border-border border-dashed">
                  Фото проекта
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3">Хотите видеть ваш проект здесь?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Свяжитесь с нами — обсудим задачу и подготовим предложение
            </p>
            <Link
              to="/contacts"
              className="bg-accent text-white font-semibold px-6 py-3 rounded hover:bg-accent/90 transition-colors inline-block"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}