import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Code2, Zap, Database, ArrowRight, Menu } from "lucide-react";
import logoA from "@assets/logoA_1761940165908.png";
import { Footer } from "@/components/Footer";

export default function HowItWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    document.title = "AEOFLOW - Jak działa AEO";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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
              <Code2 className="w-4 h-4" />
              Technologia Answer Engine Optimization
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Jak działa{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 bg-clip-text text-transparent">
              AEO
            </span>
            <span className="text-white">?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Poznaj fundamenty optymalizacji treści dla widoczności stron w AI
          </p>
        </div>
      </section>

      {/* Semantic Structure */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 mb-4">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Semantyczna Struktura</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Struktura <span className="text-cyan-400">zrozumiała dla AI</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                AEO wykorzystuje dane strukturalne takie jak Schema markup i JSON-LD, które tworzą graf wiedzy dla modeli językowych i pomagają AI zrozumieć kontekst i relacje między elementami treści. ChatGPT, Gemini i Perplexity analizują te struktury, aby interpretować content i udzielać odpowiedzi.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Definiuje typ i kontekst treści</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Opisuje właściwości i relacje między danymi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Umożliwia AI precyzyjną interpretację treści</span>
                </li>
              </ul>
            </div>
            
            <Card className="bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden">
              <CardContent className="p-0">
                <pre className="bg-black p-4 md:p-6 rounded-lg overflow-x-auto text-xs md:text-sm max-w-full">
                  <code className="text-green-400 font-mono block">
{`<main role="main" 
  itemscope 
  itemtype="https://schema.org/Article"
  itemid="https://twoja-domena.pl#article">
  <article>
    <header>
      <h1 itemprop="headline">
        Tytuł artykułu
      </h1>
      <p>Autor: 
        <span itemprop="author">
          Jan Kowalski
        </span>
      </p>
      <time itemprop="datePublished" 
            datetime="2025-01-26">
        2025-01-26
      </time>
      <meta itemprop="wordCount" 
            content="850" />
      <meta itemprop="timeRequired" 
            content="PT5M" />
    </header>
    
    <section itemprop="articleBody">
      <p>Treść artykułu...</p>
    </section>
  </article>
</main>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Format */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] md:order-1 order-2 overflow-hidden">
              <CardContent className="p-0">
                <pre className="bg-black p-4 md:p-6 rounded-lg overflow-x-auto text-xs md:text-sm max-w-full">
                  <code className="text-cyan-400 font-mono block">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pl-PL",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Czym jest AEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer Engine 
        Optimization to proces 
        optymalizacji treści pod 
        silniki odpowiedzi AI."
      }
    },
    {
      "@type": "Question",
      "name": "Jak działa AEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO strukturyzuje 
        dane w sposób zrozumiały 
        dla modeli językowych."
      }
    }
  ]
}
</script>`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <div className="md:order-2 order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 mb-4">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Format FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania i <span className="text-cyan-400">odpowiedzi dla AI</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Format pytań i odpowiedzi to jeden z najskuteczniejszych sposobów na prezentację treści dla asystentów AI. ChatGPT, Gemini i Perplexity automatycznie rozpoznają strukturę Q&A i wykorzystują ją do generowania odpowiedzi.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Zwiększa prawdopodobieństwo cytowania przez AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Ułatwia ekstrakcję wiedzy przez modele językowe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Format rozumiany przez wszystkie główne modele AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Metadata */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 mb-4">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Metadata Treści</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kontekst <span className="text-cyan-400">publikacji</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Dodatkowe informacje o treści pomagają AI zrozumieć kontekst publikacji - autora, datę, źródło i tematykę. To pozwala asystentom AI na właściwą atrybucję i ocenę wiarygodności podczas cytowania.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Definiuje kontekst publikacji i autora</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Pomaga AI zweryfikować wiarygodność źródła</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Zwiększa szanse na cytowanie w odpowiedziach AI</span>
                </li>
              </ul>
            </div>
            
            <Card className="bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden">
              <CardContent className="p-0">
                <pre className="bg-black p-4 md:p-6 rounded-lg overflow-x-auto text-xs md:text-sm max-w-full">
                  <code className="text-green-400 font-mono block">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://domena.pl#article",
  "headline": "Przewodnik po AEO",
  "description": "Kompleksowy 
    przewodnik optymalizacji...",
  "datePublished": "2025-01-26",
  "dateModified": "2025-01-26",
  "wordCount": 850,
  "timeRequired": "PT5M",
  "inLanguage": "pl-PL",
  "url": "https://domena.pl/artykul",
  "author": {
    "@id": "https://domena.pl/#author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nazwa Firmy",
    "url": "https://domena.pl",
    "sameAs": [
      "https://linkedin.com/company/..."
    ]
  }
}
</script>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voice AI Optimization */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] md:order-1 order-2 overflow-hidden">
              <CardContent className="p-0">
                <pre className="bg-black p-4 md:p-6 rounded-lg overflow-x-auto text-xs md:text-sm max-w-full">
                  <code className="text-cyan-400 font-mono block">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://domena.pl/artykul",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".short-answer",
      "#odpowiedz"
    ]
  }
}
</script>

<!-- HTML z klasami speakable -->
<section id="odpowiedz" 
         class="short-answer"
         aria-label="Krótka odpowiedź">
  <h2>Krótka odpowiedź</h2>
  <p><strong>
    AEO to optymalizacja treści 
    pod asystentów AI takich jak 
    ChatGPT i Gemini.
  </strong></p>
</section>`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <div className="md:order-2 order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 mb-4">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Optymalizacja Voice AI</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Funkcja <span className="text-cyan-400">Speakable</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Specyfikacja speakable pozwala wskazać fragmenty treści, które asystenci głosowi AI mogą wykorzystać w swoich odpowiedziach. Dzięki tej funkcji Twoje treści stają się odpowiedziami dla modeli głosowych taki jak ChatGPT Voice Assistant.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Wskazuje fragmenty priorytetowe dla AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Zwiększa widoczność w asystentach głosowych</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Optymalizuje treść pod bezpośrednie odpowiedzi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Structure */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 mb-4">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Struktura Nawigacji</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ścieżka i <span className="text-cyan-400">hierarchia</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Określanie ścieżki nawigacyjnej pomaga modelom AI zrozumieć hierarchię i strukturę Twojej witryny. ChatGPT i inni asystenci wykorzystują te informacje do lepszego kontekstualizowania treści.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Definiuje miejsce treści w strukturze witryny</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Pomaga AI zrozumieć kontekst tematyczny</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Ułatwia odkrywanie powiązanych treści</span>
                </li>
              </ul>
            </div>
            
            <Card className="bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden">
              <CardContent className="p-0">
                <pre className="bg-black p-4 md:p-6 rounded-lg overflow-x-auto text-xs md:text-sm max-w-full">
                  <code className="text-green-400 font-mono block">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona główna",
      "item": "https://domena.pl/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://domena.pl/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Przewodnik po AEO",
      "item": "https://domena.pl/aeo"
    }
  ]
}
</script>

<!-- HTML Breadcrumbs -->
<nav aria-label="Breadcrumb">
  <a href="/">Strona główna</a> › 
  <a href="/blog">Blog</a> › 
  <a href="/aeo">Przewodnik</a>
</nav>`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Gotowy wdrożyć{" "}
            </span>
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(0,240,255,1)] animate-pulse">
              AEO
            </span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Zacznij generować zoptymalizowane treści pod AI w kilka minut
          </p>
          <Button 
            size="lg" 
            className="h-16 px-12 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/logowanie?returnTo=/pricing'}
            data-testid="button-how-it-works-cta"
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
