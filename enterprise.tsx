import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Menu, Building2, Zap, Code2, MessageSquare, Settings, Rocket, CheckCircle2, ArrowRight, Users, Globe, Lock, TrendingUp } from "lucide-react";
import logoA from "@assets/logoA_1761940165908.png";
import { Footer } from "@/components/Footer";

export default function Enterprise() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "AEOFLOW - Enterprise";
  }, []);

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
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10" data-testid="badge-hero-enterprise">
            <span className="text-purple-400 text-sm font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Rozwiązanie dla średnich i dużych firm
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="heading-hero-title">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AEO Generator
            </span>
            <br />
            <span className="text-white">
              Enterprise
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" data-testid="text-hero-description">
            Skalowalne rozwiązanie AEO z dedykowanym wsparciem, dostępem do API i nieograniczoną liczbą generacji
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-12 px-8 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-400 hover:to-violet-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
              data-testid="button-hero-contact"
              onClick={() => window.location.href = 'mailto:kontakt@aeo-generator.pl?subject=Zapytanie o plan Enterprise'}
            >
              Skontaktuj się z nami
            </Button>
            <Link href="/cennik">
              <Button 
                variant="outline"
                className="h-12 px-8 bg-black border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                data-testid="button-hero-pricing"
              >
                Zobacz cennik
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-overview-title">
              Dla firm, które <span className="text-purple-400">myślą strategicznie</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-overview-description">
              Plan Enterprise został stworzony dla firm średnich i korporacji, które potrzebują indywidualnej strategii AEO oraz pełnej integracji z własnymi systemami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-gray-700 hover:border-purple-500/50 transition-all duration-300" data-testid="card-overview-scalability">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3" data-testid="heading-scalability">Skalowalność bez limitów</h3>
                    <p className="text-gray-300 leading-relaxed" data-testid="text-scalability">
                      Nielimitowana liczba generacji stron pozwala na swobodne rozwijanie strategii contentu bez martwienia się o przekroczenie dziennych limitów. Idealne dla firm z dużą ilością produktów lub treści.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-gray-700 hover:border-cyan-500/50 transition-all duration-300" data-testid="card-overview-support">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3" data-testid="heading-support">Dedykowane wsparcie</h3>
                    <p className="text-gray-300 leading-relaxed" data-testid="text-support">
                      Bezpośredni kontakt z naszym zespołem przez dedykowany kanał Slack. Szybkie odpowiedzi na pytania, pomoc w optymalizacji i doradztwo strategiczne w czasie rzeczywistym.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-features-title">
              <span className="text-cyan-400">Wszystko,</span> czego potrzebujesz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="text-features-description">
              Plan Enterprise zawiera wszystkie funkcje z planu Lite oraz zaawansowane narzędzia dla wymagających firm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black border border-cyan-500/50 hover:border-cyan-500 transition-all duration-300" data-testid="card-feature-unlimited">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3" data-testid="heading-feature-unlimited">Nielimitowane generacje</h3>
                <p className="text-gray-400 mb-4" data-testid="text-feature-unlimited">
                  Generuj nieograniczoną liczbę stron AEO każdego dnia. Brak limitów, brak ograniczeń.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Bez dziennych limitów</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-cyan-500/50 hover:border-cyan-500 transition-all duration-300" data-testid="card-feature-slack">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3" data-testid="heading-feature-slack">Wsparcie przez Slack</h3>
                <p className="text-gray-400 mb-4" data-testid="text-feature-slack">
                  Dedykowany kanał Slack z bezpośrednim dostępem do naszego zespołu ekspertów AEO.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Odpowiedzi w czasie rzeczywistym</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-pink-500/50 hover:border-pink-500 transition-all duration-300" data-testid="card-feature-api">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4">
                  <Code2 className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-pink-400 mb-3" data-testid="heading-feature-api">Dostęp do API</h3>
                <p className="text-gray-400 mb-4" data-testid="text-feature-api">
                  Pełna dokumentacja REST API z możliwością automatyzacji i integracji z Twoimi systemami.
                </p>
                <div className="flex items-center gap-2 text-pink-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pełna automatyzacja</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-blue-500/50 hover:border-blue-500 transition-all duration-300" data-testid="card-feature-custom">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center mb-4">
                  <Settings className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3" data-testid="heading-feature-custom">Spersonalizowane wdrożenia</h3>
                <p className="text-gray-400 mb-4" data-testid="text-feature-custom">
                  Dostosowanie narzędzia do Twoich unikalnych potrzeb i procesów biznesowych.
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Indywidualne podejście</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-emerald-500/50 hover:border-emerald-500 transition-all duration-300" data-testid="card-feature-lite">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3" data-testid="heading-feature-lite">Wszystkie funkcje Lite</h3>
                <p className="text-gray-400 mb-4" data-testid="text-feature-lite">
                  AI Readiness Score, historia generacji, optymalizacja AEO i wiele więcej.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pełen pakiet funkcji</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-amber-500/50 hover:border-amber-500 transition-all duration-300" data-testid="card-feature-sla">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mb-4">
                  <Lock className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3" data-testid="heading-feature-sla">Bezpieczeństwo i SLA</h3>
                <p className="text-gray-400 mb-4" data-testid="text-feature-sla">
                  Gwarancja dostępności, dedykowane zasoby i priorytetowe wsparcie techniczne.
                </p>
                <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Priorytetowa obsługa</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10" data-testid="badge-api">
                <span className="text-cyan-400 text-xs font-medium">REST API</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-api-title">
                Pełna <span className="text-cyan-400">integracja</span> z Twoimi systemami
              </h2>
              <p className="text-xl text-gray-300 mb-6" data-testid="text-api-description">
                Dostęp do API pozwala na pełną automatyzację procesu generowania treści AEO i bezproblemową integrację z istniejącymi narzędziami.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Automatyczne generowanie</h4>
                    <p className="text-gray-400 text-sm">Twórz strony AEO programatycznie bez ręcznej pracy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Integracja z CMS</h4>
                    <p className="text-gray-400 text-sm">Połącz z WordPress, Drupal, czy własnym CMS</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Webhooks i callbacki</h4>
                    <p className="text-gray-400 text-sm">Otrzymuj powiadomienia o zakończonych generacjach</p>
                  </div>
                </li>
              </ul>
            </div>

            <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-gray-700 overflow-hidden" data-testid="card-api-code">
              <CardContent className="p-0">
                <div className="bg-gray-900 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400 text-sm">api-example.js</span>
                </div>
                <div className="p-6 bg-black font-mono text-sm" data-testid="code-api-example">
                  <div className="text-gray-500">// Przykład użycia API</div>
                  <div className="text-purple-400 mt-2">const</div>{" "}
                  <div className="text-cyan-400 inline">response</div>{" "}
                  <div className="text-white inline">= </div>
                  <div className="text-purple-400 inline">await</div>{" "}
                  <div className="text-yellow-400 inline">fetch</div>
                  <div className="text-white inline">(</div>
                  <div className="text-emerald-400 mt-1 ml-4">'https://api.aeo-generator.pl/v1/generate',</div>
                  <div className="text-white ml-4">{'{'}</div>
                  <div className="text-cyan-400 ml-8">method:</div>
                  <div className="text-emerald-400 inline"> 'POST',</div>
                  <div className="text-cyan-400 ml-8 mt-1">headers:</div>
                  <div className="text-white inline"> {'{'}</div>
                  <div className="text-gray-400 ml-12">'Authorization':</div>
                  <div className="text-emerald-400 inline"> 'Bearer YOUR_API_KEY',</div>
                  <div className="text-gray-400 ml-12">'Content-Type':</div>
                  <div className="text-emerald-400 inline"> 'application/json'</div>
                  <div className="text-white ml-8">{'}'},</div>
                  <div className="text-cyan-400 ml-8">body:</div>
                  <div className="text-yellow-400 inline"> JSON</div>
                  <div className="text-white inline">.</div>
                  <div className="text-yellow-400 inline">stringify</div>
                  <div className="text-white inline">({'{'}</div>
                  <div className="text-gray-400 ml-12">title:</div>
                  <div className="text-emerald-400 inline"> 'Twój tytuł',</div>
                  <div className="text-gray-400 ml-12">content:</div>
                  <div className="text-emerald-400 inline"> 'Treść...'</div>
                  <div className="text-white ml-8">{'}'})</div>
                  <div className="text-white ml-4">{'}'}</div>
                  <div className="text-white">);</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Implementation Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 md:p-12" data-testid="section-custom-implementation">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-custom-title">
                  Spersonalizowane <span className="text-purple-400">wdrożenia</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6" data-testid="text-custom-description">
                  Rozumiemy, że każda firma ma unikalne potrzeby. Dlatego oferujemy pełne dostosowanie narzędzia do Twoich procesów biznesowych i technicznych wymagań.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-black/40 rounded-lg p-4 border border-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dedykowane szablony</h4>
                    <p className="text-gray-400 text-sm">Własne szablony AEO dopasowane do Twojej branży</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-black/40 rounded-lg p-4 border border-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Własne przepływy pracy</h4>
                    <p className="text-gray-400 text-sm">Konfiguracja zgodna z Twoimi procesami wewnętrznymi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-black/40 rounded-lg p-4 border border-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Wsparcie onboardingu</h4>
                    <p className="text-gray-400 text-sm">Pomoc w wdrożeniu i szkolenie dla Twojego zespołu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-cta-title">
            Gotowy na <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">skalowanie</span> swojej strategii AEO?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Skontaktuj się z nami, aby omówić Twoje potrzeby i otrzymać spersonalizowaną ofertę
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-10 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-400 hover:to-violet-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] text-lg"
              data-testid="button-cta-contact"
              onClick={() => window.location.href = 'mailto:kontakt@aeo-generator.pl?subject=Zapytanie o plan Enterprise'}
            >
              Skontaktuj się z nami
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Zazwyczaj odpowiadamy w ciągu 24 godzin
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
