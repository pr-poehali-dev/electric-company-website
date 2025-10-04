import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтажные работы',
      description: 'Комплексный монтаж электрических систем любой сложности для жилых и коммерческих объектов'
    },
    {
      icon: 'FileText',
      title: 'Проектирование',
      description: 'Разработка проектной документации с учетом всех норм и требований безопасности'
    },
    {
      icon: 'Cable',
      title: 'Прокладка кабельных линий',
      description: 'Профессиональная прокладка силовых и слаботочных кабелей с соблюдением стандартов'
    },
    {
      icon: 'Settings',
      title: 'Техническое обслуживание',
      description: 'Плановое и аварийное обслуживание электрооборудования и систем'
    },
    {
      icon: 'Box',
      title: 'Монтаж распределительных щитов',
      description: 'Установка и настройка распределительных щитов, автоматики и систем защиты'
    },
    {
      icon: 'Building2',
      title: 'Комплексное оснащение объектов',
      description: 'Полный цикл электротехнических работ от проектирования до ввода в эксплуатацию'
    }
  ];

  const projects = [
    {
      image: '/img/0bdaf7a5-db87-4048-8e4e-ca1e8113b40d.jpg',
      title: 'Бизнес-центр "Технопарк"',
      description: 'Полное электроснабжение офисного здания площадью 5000 м²'
    },
    {
      image: '/img/dfadb20b-5ea7-4bd2-b219-48b0c97a543f.jpg',
      title: 'Производственный комплекс',
      description: 'Монтаж силового электрооборудования и систем автоматизации'
    },
    {
      image: '/img/829be2a1-ae76-4693-81e4-bd89a779d356.jpg',
      title: 'Торговый центр "Галерея"',
      description: 'Комплексное электроснабжение ТЦ с системами резервного питания'
    }
  ];

  const priceList = [
    { service: 'Монтаж розетки/выключателя', price: 'от 500 ₽' },
    { service: 'Прокладка кабеля (за 1 м)', price: 'от 150 ₽' },
    { service: 'Установка распределительного щита', price: 'от 5 000 ₽' },
    { service: 'Монтаж светильников', price: 'от 800 ₽' },
    { service: 'Электромонтаж квартиры (под ключ)', price: 'от 2 500 ₽/м²' },
    { service: 'Проектирование электроснабжения', price: 'от 15 000 ₽' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Icon name="Zap" className="w-8 h-8 text-accent" />
                <span className="text-2xl font-bold text-primary">ЭлектроМастер</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-accent transition-colors">
                Проекты
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('price')} className="text-sm font-medium hover:text-accent transition-colors">
                Цены
              </button>
              <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
                Контакты
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Профессиональный электромонтаж
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Полный спектр электромонтажных работ любой сложности. Проектирование, монтаж, обслуживание под ключ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6">
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Полный спектр электромонтажных работ для жилых, коммерческих и промышленных объектов
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Реализованные объекты различного масштаба и сложности
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0">
                  <div className="relative overflow-hidden h-72">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">ЭлектроМастер</strong> — ведущая компания в области электромонтажных работ с многолетним опытом реализации проектов различной сложности.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы специализируемся на комплексном оснащении объектов системами электроснабжения, от проектирования до сдачи в эксплуатацию. Наша команда состоит из высококвалифицированных специалистов с лицензиями и допусками.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-accent mb-2">500+</div>
                      <div className="text-sm text-muted-foreground font-medium">Реализованных проектов</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-accent mb-2">15+</div>
                      <div className="text-sm text-muted-foreground font-medium">Лет на рынке</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-accent">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Award" className="w-8 h-8 text-accent" />
                        <CardTitle className="text-lg">Профессионализм</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Все специалисты имеют необходимые квалификации и допуски</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-accent">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="w-8 h-8 text-accent" />
                        <CardTitle className="text-lg">Гарантия качества</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Предоставляем гарантию на все виды выполненных работ</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-accent">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" className="w-8 h-8 text-accent" />
                        <CardTitle className="text-lg">Соблюдение сроков</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Выполняем работы точно в согласованные сроки</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="price" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
                <p className="text-muted-foreground text-lg">
                  Базовые расценки на основные виды работ
                </p>
              </div>
              <Card className="shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="divide-y">
                    {priceList.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors">
                        <span className="font-medium text-lg">{item.service}</span>
                        <span className="text-accent font-bold text-xl">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <p className="text-center text-muted-foreground mt-8 text-sm">
                * Точная стоимость работ определяется после выезда специалиста и осмотра объекта
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-white/90 text-lg">
                  Получите бесплатную консультацию и расчет стоимости
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-white/90">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium text-white">Телефон</div>
                        <a href="tel:+74951234567" className="hover:text-accent transition-colors">
                          +7 (495) 123-45-67
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <a href="mailto:info@elektromaster.ru" className="hover:text-accent transition-colors">
                          info@elektromaster.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium text-white">Адрес</div>
                        <div>
                          г. Москва, ул. Электриков, д. 15
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium text-white">Режим работы</div>
                        <div>
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: 10:00 - 16:00
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Заявка на консультацию</CardTitle>
                    <CardDescription>Оставьте свои данные, и мы свяжемся с вами</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <Input placeholder="Ваше имя" className="h-12" />
                      </div>
                      <div>
                        <Input type="tel" placeholder="Телефон" className="h-12" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" className="h-12" />
                      </div>
                      <div>
                        <Textarea placeholder="Опишите ваш проект или задачу" rows={4} />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 h-12 text-lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="w-8 h-8 text-accent" />
                <span className="text-2xl font-bold">ЭлектроМастер</span>
              </div>
              <p className="text-white/70">
                Профессиональные электромонтажные работы с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-white/70 hover:text-accent transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('projects')} className="block text-white/70 hover:text-accent transition-colors">
                  Проекты
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-white/70 hover:text-accent transition-colors">
                  О компании
                </button>
                <button onClick={() => scrollToSection('price')} className="block text-white/70 hover:text-accent transition-colors">
                  Цены
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <div>+7 (495) 123-45-67</div>
                <div>info@elektromaster.ru</div>
                <div>г. Москва, ул. Электриков, д. 15</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ЭлектроМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}