# AEOFLOW — fragmenty kodu interfejsu

> **Status:** to repozytorium zawiera niekompletny zestaw plików React/TypeScript. Nie zawiera kompletnej, samodzielnie uruchamialnej aplikacji SaaS.

AEOFLOW jest projektem związanym z Answer Engine Optimization (AEO). Udostępniony kod pokazuje fragmenty stron marketingowych oraz interfejsu generatora i panelu użytkownika. Opisy funkcji produktu w JSX nie stanowią dowodu ich implementacji.

## Zakres weryfikacji

Dokumentacja została opracowana na podstawie całego drzewa `main` z 9 października 2026 r., commit [8be91d54bcbaf0204dbfc3fc68249d320126c9ad](https://github.com/Ethirio/AEO---Generator-wersja-1.01-/commit/8be91d54bcbaf0204dbfc3fc68249d320126c9ad), z 12 grudnia 2025 r. Przed zmianami dokumentacji dostępna była jedna gałąź: `main`.

Nie ustalono, czy pełna aplikacja znajduje się w innym repozytorium, prywatnym projekcie lub środowisku wdrożeniowym. Brak elementu tutaj nie oznacza jego nieistnienia poza tym repozytorium. Witryna [aeoflow.io](https://aeoflow.io/) była wskazana w poprzednim README; jej kod, aktualne działanie i powiązanie z tym commitem nie zostały zweryfikowane.

## Faktyczna zawartość kodu

| Plik | Zawartość i ograniczenia |
| --- | --- |
| `Card.tsx` | Eksportuje stronę `NotFound` (404). Importuje zewnętrzny wobec tego zestawu moduł `@/components/ui/card`; sam go nie zastępuje. |
| `dashboard.tsx` | Fragment panelu: hook uwierzytelniania, zapytanie o treści, kopiowanie HTML, żądanie usunięcia, sprawdzanie planu i przekierowanie do płatności. Plik urywa się w JSX. |
| `enterprise.tsx` | Widok marketingowy Enterprise. Brakuje zamknięcia głównego `<div>` przed zakończeniem `return`. |
| `generator.tsx` | Powłoka widoku: łączy formularz i panel wyników przez stan React. Nie zawiera algorytmu generowania. |
| `home.tsx` | Fragment strony głównej. Plik urywa się po sekcji zastosowań, bez zakończenia JSX i funkcji. |
| `how-it-works.tsx` | Strona informacyjna z opisami i przykładami kodu; przykłady nie są silnikiem generatora. |
| `plans.tsx` | Fragment strony cennika; kończy się po nagłówku nawigacyjnym, bez zakończenia JSX i funkcji. |
| `example` | Plik zawierający jedynie znak nowej linii; brak działającego przykładu. |
| `README.md` | Dokumentacja repozytorium. |

Wszystkie powyższe pliki znajdują się w katalogu głównym. Nie ma katalogów `client/`, `server/`, `shared/` ani manifestu `package.json`. Szczegóły ustaleń znajdują się w [AUDIT.md](AUDIT.md).

## Zależności widoczne w kodzie

Importy wskazują na pakiety `react`, `wouter`, `lucide-react` i `@tanstack/react-query`. Ich wersje i pełna lista zależności są nieznane: brak manifestu i pliku blokady. Klasy CSS sugerują użycie Tailwind CSS, ale nie ma arkuszy ani konfiguracji potwierdzających odtwarzalny wygląd.

Następujące moduły są importowane, lecz nie są dostarczone:

| Import | Pliki korzystające |
| --- | --- |
| `@/components/navigation` | generator, dashboard |
| `@/components/content-form` | generator |
| `@/components/results-panel` | generator |
| `@shared/schema` (`AeoContent`, `User`) | generator, dashboard |
| `@/components/ui/card` | Card, dashboard, enterprise, home, how-it-works, plans |
| `@/components/ui/button` | dashboard, enterprise, home, how-it-works, plans |
| `@/components/ui/sheet` | enterprise, home, how-it-works, plans |
| `@/components/ui/progress` | dashboard |
| `@/components/Footer` | enterprise, home, how-it-works, plans |
| `@/hooks/use-toast`, `@/hooks/useAuth` | dashboard |
| `@/lib/queryClient` (`apiRequest`, `queryClient`) | dashboard |
| `@assets/logoA_1761940165908.png` | enterprise, home, how-it-works, plans |

Brakuje również konfiguracji rozwiązywania aliasów `@`, `@shared` i `@assets`. Ich docelowe ścieżki należy potwierdzić; nie można ich odtworzyć wyłącznie z importów.

## Co jest potwierdzone, a co wymaga kodu źródłowego

- **Potwierdzone:** komponenty i fragmenty widoków React/TSX, stan łączący formularz z panelem wyników oraz fragment logiki panelu.
- **Niezweryfikowane implementacje:** generowanie HTML/JSON-LD/metadanych, AI Readiness Score, walidacja treści, backend Express, baza PostgreSQL, Drizzle ORM, Passport, Google OAuth, rejestracja i logowanie, Stripe Checkout/Portal/webhooki oraz reset i egzekwowanie limitów.
- React 18, Node.js 18+, Vite, Radix/Shadcn, React Hook Form i Zod były wymienione w poprzednim README. Bez manifestu i brakujących modułów nie można potwierdzić tych wersji ani pełnego stosu.

W `dashboard.tsx` zapisano limit `10` i warunek `plan === 'lite' && subscriptionStatus === 'active'`. Jest to logika klienta, nie dowód egzekwowania limitu ani kontroli uprawnień po stronie serwera.

## API i routing

`dashboard.tsx` deklaruje klucz zapytania `/api/user/aeo-content` i wywołuje `apiRequest("DELETE", "/api/aeo-content/${id}")`. Nie ma implementacji serwera ani konfiguracji domyślnego `queryFn`, więc samo `queryKey` nie dowodzi wykonania GET.

Endpointy logowania, generowania i Stripe z poprzedniego README należy traktować jako niezweryfikowane deklaracje. Nie są specyfikacją działającego API w tym repozytorium.

Widoki odsyłają m.in. do `/`, `/o-nas`, `/jak-dziala-aeo`, `/cennik`, `/enterprise`, `/blog` i `/logowanie`. Panel przekierowuje do `/pricing?priceId=…&plan=lite`, a strona informacyjna używa `/logowanie?returnTo=/pricing`. Brak routera uniemożliwia potwierdzenie mapowania tych ścieżek. Należy wyjaśnić relację `/cennik` i `/pricing`.

## Uruchomienie

**Nie ma zweryfikowanej instrukcji uruchomienia tego zestawu.** Brak `package.json` oznacza brak deklaracji zależności i skryptów instalacji, budowania, testów oraz startu. Samo doinstalowanie React nie usuwa brakujących importów ani błędów struktury TSX.

Przed publikacją instrukcji uruchomienia należy:

1. Wskazać kanoniczne źródło kompletnego projektu i określić rolę tego repozytorium: fragmenty, archiwum, frontend czy pełna aplikacja.
2. Przywrócić pełne pliki TSX oraz wszystkie importowane komponenty, hooki, typy, narzędzia i zasoby.
3. Dostarczyć manifest, plik blokady, potwierdzoną wersję środowiska, konfigurację TypeScript/build/aliasów, punkt wejścia React, HTML, router, providery i style.
4. Dostarczyć backend albo opisać istniejącą usługę API wraz z adresem, kontraktami, uwierzytelnianiem i zasadami dostępu.
5. Jeśli celem jest pełny SaaS: uzupełnić schemat bazy, migracje, logowanie, integrację Stripe, kontrolę dostępu i limity po stronie serwera.
6. Udokumentować nazwy wymaganych zmiennych środowiskowych i przygotować przykład bez sekretów, konfigurację OAuth/webhooków oraz rozdzielenie środowisk.
7. Zweryfikować instalację, kompilację i podstawowe przepływy na czystym checkoutcie; dopiero potem podać rzeczywiście działające komendy.

## Informacje do uzupełnienia przez właściciela

- Lokalizacja i wymagany dostęp do pełnego kodu; repozytorium/gałąź/commit stanowiące źródło wdrożenia.
- Docelowa struktura katalogów i dokładne mapowanie aliasów.
- Wersje zależności, wymagania środowiska i polecenia development/build/start/test.
- Schematy `AeoContent` i `User`, kontrakty API i konfiguracja pobierania danych.
- Lokalizacja generatora i kryteriów AI Readiness Score oraz przykładowe wejście/wyjście i walidacja.
- Aktualne plany, limity i konfiguracja produktów/cen Stripe; w panelu znajduje się stały identyfikator ceny wymagający weryfikacji.
- Mapowanie tras, konfiguracja stylów, zasoby i testy.
- Aktualny adres kontaktowy: poprzednie README wskazuje `support@aeoflow.io`, a przycisk Enterprise używa `kontakt@aeo-generator.pl`.

## Prawa do kodu i kontakt

Zachowano deklarację praw z poprzedniego README:

Copyright (c) 2025 Ethirion Sp. z o.o. All rights reserved.

This software and its source code are proprietary.
Unauthorized copying, modification, distribution or use of this software, via any medium, is strictly prohibited.

W repozytorium nie ma osobnego pliku LICENSE. Zakres uprawnień i aktualność danych kontaktowych powinien potwierdzić właściciel.

- Witryna wskazana przez projekt: https://aeoflow.io/
- Firma: Ethirion Sp. z o.o.
- E-mail z poprzedniego README: support@aeoflow.io
- Telefon: +48 668 392 135
- Adres: 3 Maja 23, 42-400 Zawiercie, Polska
