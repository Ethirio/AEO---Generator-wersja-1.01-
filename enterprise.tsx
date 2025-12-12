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

  );
}
