import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Контакты</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Контакты</h1>
          <p className="text-muted-foreground max-w-2xl">
            Свяжитесь с нами любым удобным способом или оставьте заявку — перезвоним в течение 1 рабочего часа.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-border rounded p-6">
                <h3 className="text-base font-semibold text-foreground mb-5">Контактная информация</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="Phone" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Телефон</p>
                      <a href="tel:+74212000000" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        +7 (4212) 00-00-00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="Mail" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Email</p>
                      <a href="mailto:info@amurznak.ru" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        info@amurznak.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="MapPin" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Адрес</p>
                      <p className="text-sm font-semibold text-foreground">г. Благовещенск, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="Clock" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Режим работы</p>
                      <p className="text-sm font-semibold text-foreground">Пн–Пт: 9:00–18:00</p>
                      <p className="text-xs text-muted-foreground">Сб–Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-56 bg-muted rounded border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                Карта / Яндекс.Карты
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-border rounded p-6">
              <h3 className="text-base font-semibold text-foreground mb-5">Оставить заявку</h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <p className="text-base font-semibold text-foreground mb-1">Заявка отправлена!</p>
                  <p className="text-sm text-muted-foreground">Перезвоним в течение 1 рабочего часа</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (000) 000-00-00"
                      className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Сообщение</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите вашу задачу..."
                      rows={4}
                      className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white font-medium py-3 rounded hover:bg-primary/90 transition-colors w-full"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
