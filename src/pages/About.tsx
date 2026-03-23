import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "10+", label: "лет на рынке" },
  { value: "500+", label: "выполненных заказов" },
  { value: "200+", label: "постоянных клиентов" },
  { value: "1 день", label: "минимальный срок изготовления" },
];

const values = [
  {
    icon: "Award",
    title: "Качество",
    desc: "Используем проверенные материалы и контролируем каждый этап производства",
  },
  {
    icon: "Clock",
    title: "Соблюдение сроков",
    desc: "Выполняем заказы в оговоренные сроки — это принципиально важно для нас",
  },
  {
    icon: "Users",
    title: "Ориентация на клиента",
    desc: "Подбираем решения под задачи и бюджет каждого заказчика",
  },
  {
    icon: "ShieldCheck",
    title: "Соответствие нормам",
    desc: "Продукция соответствует требованиям ГОСТ и отраслевым стандартам",
  },
];

export default function About() {
  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">О компании</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">О компании Амурзнак</h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Амурзнак — производитель информационных стендов, табличек и навигационных систем для организаций Амурской области. Работаем с 2014 года.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Собственное производство в Благовещенске позволяет нам оперативно изготавливать как стандартные позиции, так и нестандартные изделия по индивидуальным требованиям заказчика.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Работаем с государственными учреждениями, коммерческими организациями, производственными предприятиями и частными заказчиками по всей Амурской области.
              </p>
            </div>
            <div className="w-full h-72 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground border border-dashed border-border">
              Фото производства
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <h2 className="text-xl font-bold text-foreground mb-8">Наши принципы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title}>
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name={v.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <h2 className="text-xl font-bold text-foreground mb-8">Производство</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-52 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground border border-dashed border-border">
                Фото производства {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
