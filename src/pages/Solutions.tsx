import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const solutions = [
  {
    id: "shops",
    title: "Для магазинов и салонов",
    icon: "ShoppingBag",
    desc: "Полный пакет информационного оформления торговой точки согласно требованиям законодательства.",
    includes: [
      "Уголок потребителя",
      "Табличка с режимом работы",
      "Знаки пожарной безопасности",
      "Таблички на кабинеты",
      "Ценники и указатели",
    ],
    price: "от 4 500 руб.",
  },
  {
    id: "offices",
    title: "Для офисов",
    icon: "Building2",
    desc: "Навигация и информационное оформление офисных помещений любого масштаба.",
    includes: [
      "Таблички на двери кабинетов",
      "Указатели направлений",
      "Информационные стенды",
      "Режим работы",
      "Знаки безопасности",
    ],
    price: "от 6 000 руб.",
  },
  {
    id: "clinics",
    title: "Для клиник",
    icon: "Cross",
    desc: "Информационное оформление медицинских учреждений с учётом отраслевых требований.",
    includes: [
      "Уголок потребителя медорганизации",
      "Таблички с именами врачей",
      "Навигация по этажам",
      "Информационные стенды",
      "Знаки безопасности",
    ],
    price: "от 8 000 руб.",
  },
  {
    id: "hoa",
    title: "Для ТСЖ и УК",
    icon: "Home",
    desc: "Стенды и таблички для управляющих компаний и товариществ собственников жилья.",
    includes: [
      "Информационный стенд управляющей компании",
      "Таблички на входных группах",
      "Стенд с информацией для жильцов",
      "Знаки пожарной безопасности",
      "Поэтажные планы эвакуации",
    ],
    price: "от 7 500 руб.",
  },
  {
    id: "education",
    title: "Для школ и учебных центров",
    icon: "GraduationCap",
    desc: "Навигация и информационное оформление образовательных учреждений.",
    includes: [
      "Таблички на классы и кабинеты",
      "Стенды с расписанием",
      "Информационные стенды",
      "Навигация по зданию",
      "Знаки безопасности",
    ],
    price: "от 9 000 руб.",
  },
  {
    id: "production",
    title: "Для производств и складов",
    icon: "Factory",
    desc: "Производственная маркировка, знаки безопасности и информационные стенды для предприятий.",
    includes: [
      "Стенды по охране труда",
      "Знаки пожарной безопасности",
      "Производственная навигация",
      "Предупреждающие знаки",
      "Маркировка трубопроводов",
    ],
    price: "от 12 000 руб.",
  },
];

export default function Solutions() {
  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Готовые решения</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Готовые решения</h1>
          <p className="text-muted-foreground max-w-2xl">
            Подобрали комплекты информационного оформления для разных типов организаций. Каждый комплект можно дополнить или изменить под ваши задачи.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="bg-white border border-border rounded p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name={sol.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-tight pt-1">{sol.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sol.desc}</p>
                <div className="mb-5 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">В комплект входит:</p>
                  <ul className="space-y-1.5">
                    {sol.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <Icon name="Check" size={14} className="text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-base font-bold text-primary">{sol.price}</span>
                  <Link
                    to="/contacts"
                    className="text-sm font-medium text-primary border border-primary/30 px-4 py-1.5 rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    Заказать
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Нужен индивидуальный комплект?</h3>
              <p className="text-white/70 text-sm">Составим комплект под ваши задачи и бюджет</p>
            </div>
            <Link
              to="/contacts"
              className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-white/90 transition-colors text-center shrink-0"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
