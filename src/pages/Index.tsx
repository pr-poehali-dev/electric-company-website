import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтажные работы',
      description: 'Комплексный монтаж электрических систем любой сложности для жилых и коммерческих объектов'
    },
    {
      icon: 'Plug',
      title: 'Проектирование',
      description: 'Разработка проектной документации с учетом всех норм и требований безопасности'
    },
    {
      icon: 'Cable',
      title: 'Прокладка кабельных линий',
      description: 'Профессиональная прокладка силовых и слаботочных кабелей с соблюдением стандартов'
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Плановое и аварийное обслуживание электрооборудования и систем'
    },
    {
      icon: 'CircuitBoard',
      title: 'Монтаж распределительных щитов',
      description: 'Установка и настройка распределительных щитов, автоматики и систем защиты'
    },
    {
      icon: 'Briefcase',
      title: 'Комплексное оснащение объектов',
      description: 'Полный цикл электротехнических работ от проектирования до ввода в эксплуатацию'
    }
  ];

  const projects = [
    {
      image: '/img/4388ad85-a7e6-4159-a00f-046deed6fac3.jpg',
      title: 'Бизнес-центр "Технопарк"',
      description: 'Полное электроснабжение офисного здания площадью 5000 м²'
    },
    {
      image: '/img/a197d2f9-cf5a-4986-8142-a591abb71702.jpg',
      title: 'Производственный комплекс',
      description: 'Монтаж силового электрооборудования и систем автоматизации'
    },
    {
      image: '/img/7ae47ef9-78e1-49b0-93cd-f87592d55cc7.jpg',
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/b79b9324-42c4-4954-ab83-69a185e5a7e8.png" 
                alt="ADV ELEKTRO" 
                className="h-12 w-auto"
              />
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
                Прайс-лист
              </button>
              <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
                Контакты
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Основной в электрике
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Профессиональные электромонтажные работы любой сложности. Проектирование, монтаж, обслуживание.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 text-white">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Полный спектр электромонтажных работ для жилых, коммерческих и промышленных объектов
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-accent/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="w-6 h-6 text-accent" />
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

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Реализованные объекты различного масштаба и сложности
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">О компании</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg">
                    <strong>ADV ELEKTRO</strong> — ведущая компания в области электромонтажных работ с многолетним опытом реализации проектов различной сложности.
                  </p>
                  <p className="text-muted-foreground">
                    Мы специализируемся на комплексном оснащении объектов системами электроснабжения, от проектирования до сдачи в эксплуатацию. Наша команда состоит из высококвалифицированных специалистов с лицензиями и допусками.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Лет на рынке</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card className="border-accent/20">
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
                  <Card className="border-accent/20">
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
                  <Card className="border-accent/20">
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

        <section id="price" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Прайс-лист</h2>
                <p className="text-muted-foreground text-lg">
                  Базовые расценки на основные виды работ
                </p>
              </div>
              <Card className="border-accent/20">
                <CardContent className="p-0">
                  <div className="divide-y">
                    {priceList.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors">
                        <span className="font-medium">{item.service}</span>
                        <span className="text-accent font-bold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <p className="text-center text-muted-foreground mt-6">
                * Точная стоимость работ определяется после выезда специалиста и осмотра объекта
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
                <p className="text-muted-foreground text-lg">
                  Свяжитесь с нами для получения консультации
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium">Телефон</div>
                        <a href="tel:+74951234567" className="text-muted-foreground hover:text-accent transition-colors">
                          +7 (495) 123-45-67
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:info@advelektro.ru" className="text-muted-foreground hover:text-accent transition-colors">
                          info@advelektro.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium">Адрес</div>
                        <div className="text-muted-foreground">
                          г. Москва, ул. Примерная, д. 123
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium">Режим работы</div>
                        <div className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: выходной
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Заявка на консультацию</CardTitle>
                    <CardDescription>Оставьте свои данные, и мы свяжемся с вами</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Input type="tel" placeholder="Телефон" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <Textarea placeholder="Опишите ваш проект или задачу" rows={4} />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90">
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
              <img 
                src="https://cdn.poehali.dev/files/b79b9324-42c4-4954-ab83-69a185e5a7e8.png" 
                alt="ADV ELEKTRO" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80">
                Профессиональные электромонтажные работы с 2008 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-white/80 hover:text-accent transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('projects')} className="block text-white/80 hover:text-accent transition-colors">
                  Проекты
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-accent transition-colors">
                  О компании
                </button>
                <button onClick={() => scrollToSection('price')} className="block text-white/80 hover:text-accent transition-colors">
                  Прайс-лист
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <div>+7 (495) 123-45-67</div>
                <div>info@advelektro.ru</div>
                <div>г. Москва, ул. Примерная, д. 123</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ADV ELEKTRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
