import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Sparkles, 
  Zap, 
  Target, 
  Code, 
  ShoppingCart, 
  FileText, 
  Building, 
  Laptop,
  CheckCircle2,
  Check,
  ArrowRight,
  MessageSquare,
  Brain,
  Globe,
  Heart,
  BookOpen,
  Menu,
  X,
  Briefcase
} from "lucide-react";
import logoA from "@assets/logoA_1761940165908.png";
import { Footer } from "@/components/Footer";

export default function Home() {
  const aiPlatforms = ['ChatGPT', 'Claude', 'Gemini', 'Google AI Overviews', 'Perplexity', 'Meta', 'Grok', 'Microsoft Copilot', 'Meta AI', 'DeepSeek'];
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "AEOFLOW - Generator stron AEO";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % aiPlatforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [aiPlatforms.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-header-logo">
              <img src={logoA} alt="AEOFLOW Logo" className="w-8 h-8" />
              <span className="text-xl font-bold italic tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>AEOFLOW</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/o-nas">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-cyan-400 hover:bg-transparent"
                data-testid="link-header-about"
              >
                O Nas
              </Button>
            </Link>
            <Link href="/jak-dziala-aeo">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-cyan-400 hover:bg-transparent"
                data-testid="link-header-how-it-works"
              >
                Jak działa AEO
              </Button>
            </Link>
            <Link href="/cennik">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-cyan-400 hover:bg-transparent"
                data-testid="link-header-cennik"
              >
                Cennik
              </Button>
            </Link>
            <Link href="/enterprise">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-cyan-400 hover:bg-transparent"
                data-testid="link-header-enterprise"
              >
                Enterprise
              </Button>
            </Link>
            <a href="/blog">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-cyan-400 hover:bg-transparent"
                data-testid="link-header-blog"
              >
                Blog
              </Button>
            </a>
            <Link href="/logowanie">
              <Button 
                variant="outline"
                className="border border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
                data-testid="button-header-register"
              >
                Zarejestruj się
              </Button>
            </Link>
            <Link href="/logowanie">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300"
                data-testid="button-header-login"
              >
                Zaloguj się
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-cyan-400"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800 w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/o-nas">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-transparent text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="link-mobile-about"
                  >
                    O Nas
                  </Button>
                </Link>
                <Link href="/jak-dziala-aeo">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-transparent text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="link-mobile-how-it-works"
                  >
                    Jak działa AEO
                  </Button>
                </Link>
                <Link href="/cennik">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-transparent text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="link-mobile-cennik"
                  >
                    Cennik
                  </Button>
                </Link>
                <Link href="/enterprise">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-transparent text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="link-mobile-enterprise"
                  >
                    Enterprise
                  </Button>
                </Link>
                <a href="/blog">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-300 hover:text-cyan-400 hover:bg-transparent text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="link-mobile-blog"
                  >
                    Blog
                  </Button>
                </a>
                <Link href="/logowanie">
                  <Button 
                    variant="outline"
                    className="w-full border border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="button-mobile-register"
                  >
                    Zarejestruj się
                  </Button>
                </Link>
                <Link href="/logowanie">
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-magenta-500 text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="button-mobile-login"
                  >
                    Zaloguj się
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 240, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10">
            <span className="text-cyan-400 text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Optymalizacja stron pod AI Search
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
              Generuj treści<br />zoptymalizowane pod{" "}
            </span>
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(0,240,255,0.9)] animate-pulse">
              AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Twórz strony cytowane przez AI w kilka minut. Automatyczna struktura AEO dla zwiększenia widoczności strony w AI
          </p>
          
          {/* AI Platform Rotator */}
          <div className="mb-12 h-16 flex items-center justify-center">
            <div 
              key={currentPlatformIndex}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900/50 border border-cyan-500/50 text-cyan-300 font-bold text-2xl backdrop-blur-sm animate-fade-in"
              data-testid="text-current-platform"
            >
              {aiPlatforms[currentPlatformIndex]}
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href="#pricing" data-testid="link-hero-pricing">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-magenta-500 text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300"
                data-testid="button-hero-start"
              >
                Zobacz plany
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is AEO Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Czym jest <span className="text-cyan-400">AEO</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Answer Engine Optimization to nowy standard widoczności w dobie sztucznej inteligencji. Zamiast konkurować o pozycje w standardowych wyszukiwarkach, AEO koncentruje się na tym, aby Twoje treści były dostosowane i przywoływane w odpowiedziach przez asystentów AI takich jak ChatGPT, Gemini, Claude lub Perplexity. Optymalizacja treści pod widoczność w AI przygotowuje strony internetowe do rzeczywistości w której użytkownicy szukają informacji wykorzystując AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-gray-400" />
                </div>
                <CardTitle className="text-white">Tradycyjne SEO</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                <ul className="space-y-2">
                  <li>• Optymalizacja dla wyszukiwarek Google, Bing</li>
                  <li>• Słowa kluczowe, linkowanie i pozycje</li>
                  <li>• Meta tagi, nagłówki i UX</li>
                  <li>• Celem jest wysoka pozycja w wynikach wyszukiwania</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-400 via-cyan-600 to-blue-800 border border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,120,255,0.8)]">
                  <Brain className="w-6 h-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
                <CardTitle className="text-white flex items-center gap-2">
                  Answer Engine Optimization
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">NOW</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  <li>• Optymalizacja dla asystentów AI - ChatGPT, Claude, Perplexity</li>
                  <li>• Wielowarstwowa struktura treści zapewniająca czytelność dla AI</li>
                  <li>• Struktura semantyczna, dane ułatwiające interpretację przez AI</li>
                  <li>• Celem jest cytowanie i widoczność strony w odpowiedziach AI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dlaczego <span className="text-cyan-400">AEO</span> jest ważne?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Coraz więcej użytkowników szuka dziś informacji bezpośrednio przez asystentów AI. Wdrożenie na strony standardów AEO pozwala Twoim treściom zaistnieć w odpowiedziach modeli językowych takich jak ChatGPT, Gemini, Google AI Overviews lub Perplexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Zwiększ widoczność",
                description: "Twoja strona może pojawić się bezpośrednio w odpowiedziach generowanych przez AI. AEO pomaga modelom zrozumieć kontekst Twojej treści i cytować ją jako źródło odpowiedzi",
                color: "cyan",
                hasCheck: false
              },
              {
                icon: Check,
                title: "Gotowe do publikacji",
                description: "Otrzymujesz kompletny, zoptymalizowany kod HTML z metadanymi i strukturą semantyczną, gotowy do wklejenia na stronę i indeksacji przez AI.",
                color: "purple",
                hasCheck: false
              },
              {
                icon: MessageSquare,
                title: "AI Readiness Score™",
                description: "Nasz autorski program pozwala sprawdźić, jak dobrze Twoja treść jest przygotowana do analizy przez AI.",
                color: "green",
                hasCheck: false
              }
            ].map((benefit, idx) => (
              <Card 
                key={idx}
                className={`bg-gradient-to-br from-gray-900 to-black border hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 ${
                  benefit.color === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-500' : 
                  benefit.color === 'purple' ? 'border-purple-500/30 hover:border-purple-500' :
                  benefit.color === 'magenta' ? 'border-magenta-500/30 hover:border-magenta-500' : 
                  'border-green-500/30 hover:border-green-500'
                }`}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    benefit.color === 'cyan' ? 'bg-cyan-500/20 shadow-[0_0_20px_rgba(0,240,255,0.3)]' :
                    benefit.color === 'purple' ? 'bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]' :
                    benefit.color === 'magenta' ? 'bg-magenta-500/20 shadow-[0_0_20px_rgba(255,0,255,0.3)]' :
                    'bg-green-500/20 shadow-[0_0_20px_rgba(0,255,0,0.3)]'
                  }`}>
                    <benefit.icon className={`w-7 h-7 ${
                      benefit.color === 'cyan' ? 'text-cyan-400' :
                      benefit.color === 'purple' ? 'text-purple-400' :
                      benefit.color === 'magenta' ? 'text-magenta-400' :
                      'text-green-400'
                    }`} />
                  </div>
                  <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Jak działa <span className="text-cyan-400">aplikacja</span>?
            </h2>
            <p className="text-xl text-gray-400">
              Zautomatyzowany proces w 3 prostych krokach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Wprowadź dane",
                description: "Wypełnij dostępne pola w aplikacji, podając niezbędne informacje do wygenerowania treści",
                icon: FileText
              },
              {
                step: "02",
                title: "Generator",
                description: "System sprawdza zgodność z AEO i generuje kompletny kod strony zoptymalizowany pod AI",
                icon: Brain
              },
              {
                step: "03",
                title: "Publikuj kod",
                description: "Skopiuj wygenerowany kod i wklej go na swoją stronę - gotowe!",
                icon: Code
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 rounded-lg p-8 h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                  <div className="text-6xl font-bold text-cyan-500/20 mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-500/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-magenta-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magenta-400">Zastosowania</span>
            </h2>
            <p className="text-xl text-gray-400">
              Idealne dla różnych branż i contentu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: "E-commerce",
                description: "Opisy produktów zoptymalizowane pod generatywne wyszukiwanie. Zwiększ szansę, że asystenci AI polecą Twoje produkty w odpowiedziach zakupowych",
                color: "cyan"
              },
              {
                icon: Building,
                title: "Lokalne biznesy",
                description: "Dane o firmie zoptymalizowane pod lokalne zapytania AI. Zadbaj, aby ChatGPT lub inny asystenci AI rekomendowali Twoją firmę w odpowiedziach lokalnych",
                color: "green"
              },
              {
                icon: BookOpen,
                title: "Edukacja",
                description: "Blogi, artykuły i poradniki tworzone w sposób, który AI łatwo cytuje. Zbuduj autorytet w swojej branży dzięki treściom, które AI rozpoznaje jako wiarygodne źródło",
                color: "yellow"
              },
              {
                icon: Briefcase,
                title: "Usługi",
                description: "Treści usługowe tworzone w sposób, który AI potrafi zrozumieć, sklasyfikować i polecić w odpowiedziach. Zwiększ widoczność swojej oferty, gdy użytkownicy pytają asystenta o rekomendacje specjalistów",
                color: "cyan"
              }
            ].map((useCase, idx) => (
              <Card 
                key={idx}
                className={`bg-gradient-to-br from-gray-900 to-black border transition-all duration-300 ${
                  useCase.color === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]' :
                  useCase.color === 'yellow' ? 'border-yellow-500/30 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]' :
                  useCase.color === 'magenta' ? 'border-magenta-500/30 hover:border-magenta-500 hover:shadow-[0_0_20px_rgba(255,0,255,0.2)]' :
                  'border-green-500/30 hover:border-green-500 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)]'
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    useCase.color === 'cyan' ? 'bg-cyan-500/20' :
                    useCase.color === 'yellow' ? 'bg-yellow-500/20' :
                    useCase.color === 'magenta' ? 'bg-magenta-500/20' :
                    'bg-green-500/20'
                  }`}>
                    <useCase.icon className={`w-6 h-6 ${
                      useCase.color === 'cyan' ? 'text-cyan-400' :
                      useCase.color === 'yellow' ? 'text-yellow-400' :
                      useCase.color === 'magenta' ? 'text-magenta-400' :
                      'text-green-400'
                    }`} />
                  </div>
                  <CardTitle className="text-white text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-400">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Profesjonalne narzędzie <span className="text-cyan-400">AEO</span><br/>dla Twojego Biznesu
            </h2>
            <p className="text-xl text-gray-400">
              Wybierz plan dopasowany do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lite Plan - Popular */}
            <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </span>
              </div>
              <CardHeader className="pt-10">
                <CardTitle className="text-3xl text-white">Lite</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold text-white">199 zł</span>
                  <span className="text-gray-400">/miesiąc</span>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  Idealne dla małych firm i twórców treści, którzy chcą wykorzystać AI do wzrostu widoczności
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Do 10 stron dziennie</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Automatycznie generowane treści zgodne z standardami AEO</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>System AI Readiness Score™</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Historia generacji</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Wsparcie email</span>
                  </li>
                </ul>
                <Link href="/logowanie?returnTo=/pricing">
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)]"
                    data-testid="button-pricing-lite"
                  >
                    Rozpocznij z Lite
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <CardHeader className="pt-10">
                <CardTitle className="text-3xl text-white">Enterprise</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold text-white">od 1,499 zł</span>
                  <span className="text-gray-400">/miesiąc</span>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  Dla firm średnich i korporacji potrzebujących indywidualnej strategii AEO oraz integracji z własnym systemem
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Nielimitowane generacje stron</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Wszystkie funkcje z planu Lite</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Dedykowane wsparcie przez Slack</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Dostęp do API</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Spersonalizowane wdrożenia AEO</span>
                  </li>
                </ul>
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-400 hover:to-violet-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                  data-testid="button-pricing-enterprise"
                  onClick={() => window.location.href = 'mailto:kontakt@aeo-generator.pl?subject=Zapytanie o plan Enterprise'}
                >
                  Skontaktuj się z nami
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Często zadawane <span className="text-cyan-400">pytania</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Czym różni się AEO od SEO?",
                a: "SEO optymalizuje treści pod wyszukiwarki jak Google. AEO optymalizuje treści pod asystentów AI takich jak: ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews i pozostali. SEO skupia się na słowach kluczowych i linkach, a Answer Engine Optimization wykorzystuje strukturyzowane dane, które AI portrafi łatwo zrozumieć i nastepnie cytować w odpowiedziach."
              },
              {
                q: "Czy potrzebuję wiedzy technicznej?",
                a: "Nie! Wystarczy wypełnić wymagane pola w aplikacji z pytaniem, odpowiedzią i podstawowymi informacjami. System automatycznie stworzy zoptymalizowany kod treści, który jest gotowy do wklejenia na stronę."
              },
              {
                q: "Które AI wspiera aplikacja?",
                a: "Aplikacja tworzy treści zoptymalizowane pod wszystkie główne platformy AI: ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, Microsoft Copilot, Meta AI, DeepSeek i innyh asystentów wykorzystujących mechanizm RAG."
              },
              {
                q: "Jak działa AI Readiness Score?",
                a: "To nasz autorski system oceny, który sprawdza w czasie rzeczywistym czy Twoja treść spełnia wszystkie kryteria AEO: odpowiednia liczba faktów, dostępność źródeł, strukturyzacja danych, długość odpowiedzi i inne czynniki wpływające na cytowanie przez AI."
              },
              {
                q: "Czy mogę anulować subskrypcję?",
                a: "Tak, w każdej chwili. Nie ma żadnych długoterminowych umów. Anuluj subskrypcje kiedy chcesz przez panel Stripe w aplikacji lub napisz do nas."
              },
              {
                q: "Jakie limity treści ma plan Lite?",
                a: "Plan Lite daje Ci możliwość stworzenia do 10 stron dziennie, co wystarczy dla większości małych firm i twórców treści. Jeśli potrzebujesz więcej, skontaktuj się z nami w sprawie planu Enterprise z nielimitowanymi generacjami."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-magenta-500/5 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Zacznij optymalizować<br />pod{" "}
            </span>
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(0,240,255,1)] animate-pulse">
              AI
            </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">
              {" "}już dziś
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Dołącz do firm które zwiększyły swoją widoczność w asystentach AI
          </p>
          <Button 
            size="lg" 
            className="h-16 px-12 text-xl font-bold bg-gradient-to-r from-cyan-500 to-magenta-500 text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300"
            onClick={() => window.location.href = '/logowanie?returnTo=/pricing'}
            data-testid="button-final-cta"
          >
            Rozpocznij z Lite
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
