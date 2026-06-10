import { Compass, Lock, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail, ChevronLeft, ChevronRight, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [calendarMonth, setCalendarMonth] = useState(6)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openBooking = (tourName: string) => {
    setSelectedTour(tourName)
    setSelectedDate(null)
    setModalOpen(true)
  }

  const closeBooking = () => {
    setModalOpen(false)
    setSelectedTour(null)
  }

  const availableDates = [3, 7, 10, 14, 17, 21, 24, 28]
  const monthNames = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
  const daysInMonth = new Date(2026, calendarMonth, 0).getDate()
  const firstDay = new Date(2026, calendarMonth - 1, 1).getDay()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1

  const galleryImages = [
    { src: "https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/715508c6-21a4-4daa-b70a-5ef82e459f53.jpg", caption: "Горная тропа" },
    { src: "https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/e3d1714c-4038-4ad4-94e8-618034c1b35f.jpg", caption: "Скалы Карадага" },
    { src: "https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/8b782a70-934f-4844-a320-a4441633ceea.jpg", caption: "Подземная река" },
    { src: "https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/bbac54b5-291b-4767-9f0e-921a6db2ac61.jpg", caption: "Прибрежные скалы" },
    { src: "https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/55cb93a3-3dba-4d19-bc6f-cca3e4b2e28a.jpg", caption: "Ночной лагерь" },
    { src: "https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/f2089e41-2bd5-4e78-bb38-2f6c03f0a086.jpg", caption: "Крепость Мангуп" },
  ]

  const reviews = [
    { name: "Анна К.", date: "Май 2026", tour: "Восхождение на Ай-Петри", text: "Невероятное путешествие! Гид знает каждую тропинку и рассказывает такие истории, что время летит незаметно. Вид с вершины — незабываемый.", rating: 5 },
    { name: "Дмитрий М.", date: "Апрель 2026", tour: "Пещеры Чатыр-Дага", text: "Был скептически настроен, но это превзошло все ожидания. Мраморная пещера — это что-то из другого мира. Обязательно вернусь на Карадаг.", rating: 5 },
    { name: "Светлана Р.", date: "Июнь 2026", tour: "Дикие бухты Карадага", text: "Два дня у моря без толпы туристов — это бесценно. Ночёвка в глэмпинге под звёздами и купание в бухтах, куда добраться можно только пешком.", rating: 5 },
  ]

  const faqs: FAQ[] = [
    {
      question: "Какая физическая подготовка нужна для туров?",
      answer:
        "Большинство наших туров рассчитаны на людей с базовой физической подготовкой. Горные маршруты требуют умения ходить по пересечённой местности 5–10 км в день. Для пещерных и скальных туров проводится краткий инструктаж — специальный опыт не нужен. Уровень сложности указан в описании каждого тура.",
    },
    {
      question: "Что входит в стоимость тура?",
      answer:
        "В стоимость включены: трансфер от точки сбора, профессиональный гид, всё необходимое снаряжение, питание на маршруте и страховка. Проживание в отеле или глэмпинге включено в многодневные туры. Личные вещи и дорога до точки сбора — за свой счёт.",
    },
    {
      question: "Безопасно ли путешествовать по горному Крыму?",
      answer:
        "Безопасность — наш главный приоритет. Все гиды имеют сертификаты МЧС и опыт работы в горах от 5 лет. Мы отслеживаем погоду, используем профессиональное страховочное снаряжение и всегда имеем план эвакуации. За 7 лет работы — ни одного серьёзного инцидента.",
    },
    {
      question: "Как забронировать тур и внести оплату?",
      answer:
        "Оставьте заявку через форму на сайте или напишите нам напрямую. Мы свяжемся в течение нескольких часов, уточним детали и согласуем дату. Предоплата 30% бронирует ваше место, остаток — за 3 дня до тура. Принимаем переводы на карту.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/5e6dc403-3c28-442f-8484-f5e33796300c.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Compass className="w-5 h-5" />
            <span className="font-medium text-balance">Неизведанный край Крыма</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Туры", "Безопасность", "Маршруты", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Авторские туры по Крыму с опытными гидами</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Открой настоящий Крым.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Пещеры Чатыр-Дага, скалы Карадага, плато Ай-Петри — исследуйте дикую природу полуострова в авторских экспедициях с профессиональными гидами.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Выбрать тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть маршруты
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Гиды с сертификатами МЧС — ваша безопасность гарантирована</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert-Led Tours */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Авторские маршруты</h3>
              <p className="text-white/80 leading-relaxed">Места, куда не возят туристические автобусы — только с нами.</p>
            </div>

            {/* World-Class Safety */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Гиды МЧС</h3>
              <p className="text-white/80 leading-relaxed">Сертифицированные спасатели с опытом от 5 лет в крымских горах.</p>
            </div>

            {/* All-Inclusive Package */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Всё включено</h3>
              <p className="text-white/80 leading-relaxed">Снаряжение, питание на маршруте, трансфер и страховка.</p>
            </div>

            {/* Eco */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Бережный туризм</h3>
              <p className="text-white/80 leading-relaxed">Мы сохраняем природу Крыма — маршруты без вреда экосистеме.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Наши туры</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Выберите маршрут — от однодневных прогулок до многодневных экспедиций.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/e4d2dbf2-d1fe-45a7-9af9-bb2ea7005977.jpg"
                  alt="Пещеры Чатыр-Дага"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                  1 день
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">Пещеры Чатыр-Дага</h3>
                <p className="text-white/70 text-sm mb-6 flex-1">
                  Мраморная и Эмине-Баир-Хосар — две самые красивые пещеры Крыма. Сталактиты, подземные озёра и тысячелетняя история.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold">2 500 ₽</span>
                    <span className="text-white/50 text-sm"> / чел.</span>
                  </div>
                  <Button onClick={() => openBooking("Пещеры Чатыр-Дага")} className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
                </div>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/db46692b-613c-4a11-8f29-1f56436e6b0e.jpg"
                  alt="Восхождение на Ай-Петри"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                  1 день
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">Восхождение на Ай-Петри</h3>
                <p className="text-white/70 text-sm mb-6 flex-1">
                  Подъём по горной тропе, панорама на всё побережье, рассвет над облаками. Один из самых эффектных маршрутов Крыма.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold">3 000 ₽</span>
                    <span className="text-white/50 text-sm"> / чел.</span>
                  </div>
                  <Button onClick={() => openBooking("Восхождение на Ай-Петри")} className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
                </div>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/83c4ee5a-bf13-487c-9f3a-f2110e5e4555/files/0b07cf16-8c45-4ec5-b3bb-c07e01385e6f.jpg"
                  alt="Дикие бухты Карадага"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                  2 дня
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">Дикие бухты Карадага</h3>
                <p className="text-white/70 text-sm mb-6 flex-1">
                  Вулканический заповедник, скала Золотые Ворота и бухты без единого туриста. Ночёвка в глэмпинге у моря.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold">7 900 ₽</span>
                    <span className="text-white/50 text-sm"> / чел.</span>
                  </div>
                  <Button onClick={() => openBooking("Дикие бухты Карадага")} className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как проходит тур</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От сбора группы до финальной точки маршрута — каждый шаг продуман для вашего комфорта и впечатлений.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-3">
                <div className="text-3xl font-bold text-white/60">01.</div>
                <h3 className="text-xl font-semibold">Сбор и инструктаж</h3>
                <p className="text-white/70 text-sm">Встречаемся, проверяем снаряжение, знакомимся с группой.</p>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-3">
                <div className="text-3xl font-bold text-white/60">02.</div>
                <h3 className="text-xl font-semibold">Выход на маршрут</h3>
                <p className="text-white/70 text-sm">Горные тропы, каньоны и смотровые площадки под руководством гида.</p>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-3">
                <div className="text-3xl font-bold text-white/60">03.</div>
                <h3 className="text-xl font-semibold">Изюминка маршрута</h3>
                <p className="text-white/70 text-sm">Пещера, вершина или бухта — главная точка тура с рассказом гида.</p>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-3">
                <div className="text-3xl font-bold text-white/60">04.</div>
                <h3 className="text-xl font-semibold">Финал</h3>
                <p className="text-white/70 text-sm">Делимся впечатлениями и возвращаемся в точку сбора.</p>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Посмотреть расписание туров
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о турах по Крыму: от уровня сложности до бронирования места в группе.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Записаться в тур</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Как вас зовут?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Телефон или Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Какой тур вас интересует?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите, что хотите увидеть в Крыму — горы, пещеры, море, или всё вместе..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Напишите нам — расскажем о доступных датах, подберём тур под ваш уровень подготовки и ответим на любые вопросы. Отвечаем в течение нескольких часов.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Руководитель туров"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Алексей Горный</h4>
                      <p className="text-gray-600">Главный гид и основатель</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Галерея</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Живые моменты из наших экспедиций.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => { setGalleryIndex(i); setGalleryOpen(true) }}
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Отзывы</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Что говорят те, кто уже побывал с нами.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white/85 leading-relaxed flex-1">«{r.text}»</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-white/50 text-sm">{r.tour} · {r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Compass className="w-6 h-6" />
                  <span className="text-xl font-semibold">Неизведанный край Крыма</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Авторские туры и экспедиции по Крыму. Пещеры, горы, каньоны и дикие бухты — показываем полуостров с той стороны, которую не видят обычные туристы.
                </p>
              </div>

              {/* Tours Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ТУРЫ</h3>
                <ul className="space-y-3">
                  {["Горные маршруты", "Пещерные туры", "Морские прогулки", "Многодневные экспедиции"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша команда", "Безопасность", "Отзывы", "Блог о Крыме"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Как забронировать", "Контакты", "Вопросы и ответы", "Условия участия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости и свежие маршруты</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Неизведанный край Крыма</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Gallery Lightbox */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button onClick={() => setGalleryOpen(false)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={() => setGalleryIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="max-w-3xl w-full">
            <img src={galleryImages[galleryIndex].src} alt={galleryImages[galleryIndex].caption} className="w-full rounded-2xl object-cover max-h-[75vh]" />
            <p className="text-center text-white/60 mt-4">{galleryImages[galleryIndex].caption} · {galleryIndex + 1} / {galleryImages.length}</p>
          </div>
          <button
            onClick={() => setGalleryIndex(i => (i + 1) % galleryImages.length)}
            className="absolute right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Booking Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeBooking} />
          <div className="relative bg-[#13181d] ring-1 ring-white/15 rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <button
              onClick={closeBooking}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-1 text-white">Запись на тур</h3>
            <p className="text-white/50 text-sm mb-6">{selectedTour}</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Ваше имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/15 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="Как вас зовут?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/15 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Желаемая дата</label>
                <div className="rounded-xl bg-white/5 ring-1 ring-white/15 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <button onClick={() => setCalendarMonth(m => Math.max(1, m - 1))} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold">{monthNames[calendarMonth - 1]} 2026</span>
                    <button onClick={() => setCalendarMonth(m => Math.min(12, m + 1))} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(d => (
                      <div key={d} className="text-center text-white/30 text-xs py-1">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1
                      const isAvailable = availableDates.includes(day)
                      const isSelected = selectedDate === day
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => isAvailable && setSelectedDate(day)}
                          className={`aspect-square rounded-lg text-xs font-medium transition-colors ${
                            isSelected ? "bg-white text-black" :
                            isAvailable ? "bg-white/10 text-white hover:bg-white/20" :
                            "text-white/20 cursor-default"
                          }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                  {selectedDate && (
                    <p className="text-center text-sm text-white/60 mt-3">
                      Выбрано: {selectedDate} {monthNames[calendarMonth - 1]}
                    </p>
                  )}
                </div>
              </div>
              <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 text-base font-semibold mt-2">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index