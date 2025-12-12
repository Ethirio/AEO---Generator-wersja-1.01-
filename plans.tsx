import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Menu, CheckCircle2, Zap } from "lucide-react";
import logoA from "@assets/logoA_1761940165908.png";
import { Footer } from "@/components/Footer";

export default function Plans() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "AEOFLOW - Cennik";
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
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 240, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10">
            <span className="text-cyan-400 text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Przejrzyste ceny bez ukrytych kosztów
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Wybierz plan{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 bg-clip-text text-transparent">
              dla siebie
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Profesjonalne narzędzie AEO dopasowane do Twoich potrzeb
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
                    <span>Automatycznie generowane treści zgodne z wytycznymi AEO</span>
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

      <Footer />
    </div>
  );
}
