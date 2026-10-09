# Audyt zgodności README z kodem AEOFLOW

Data: 9 października 2026 r. Repozytorium: [Ethirio/AEO---Generator-wersja-1.01-](https://github.com/Ethirio/AEO---Generator-wersja-1.01-).

## Zakres i metoda

Sprawdzono pełne rekurencyjne drzewo main (odpowiedź GitHub: truncated=false), listę gałęzi oraz pełną treść wszystkich dziewięciu plików przypiętych do commita `8be91d54bcbaf0204dbfc3fc68249d320126c9ad`. Ostatni commit main: 12 grudnia 2025 r., 09:21:06 UTC, komunikat „README.md”. Przed przygotowaniem zmian dokumentacji lista gałęzi zawierała wyłącznie main.

Audyt obejmuje analizę statyczną importów, eksportów, wywołań, odsyłaczy i końcówek plików. Nie uruchamiano aplikacji, kompilacji ani testów: brak manifestu, konfiguracji i modułów uniemożliwia odtworzenie środowiska. Ocena struktury JSX jest wynikiem przeglądu źródła, nie wykonania kompilatora.

Nie badano innych repozytoriów, środowiska produkcyjnego ani załącznika README podlinkowanego w poprzedniej dokumentacji. Nie ustalono lokalizacji pełnego kodu. Ustalenia odnoszą się wyłącznie do wskazanego snapshotu.

## Wniosek

Poprzednie README przedstawia pełną aplikację SaaS i strukturę, których ten snapshot nie dostarcza. Repozytorium jest niekompletnym zestawem plików interfejsu React/TypeScript. Brak zaplecza i zależności oraz niekompletne TSX stanowią niezależne blokady uruchomienia.

## Rozbieżności

| Deklaracja README | Dowód w snapshotcie | Ocena |
| --- | --- | --- |
| client/, server/, shared/, package.json | Wszystkie 9 wpisów to pliki w katalogu głównym | Struktura w README nie odpowiada drzewu |
| Pełny SaaS | 7 plików TSX, README i pusty funkcjonalnie example | Kompletności nie potwierdzono |
| React 18, Vite, Node 18+ | Importy React; brak wersji, manifestu i build config | React widoczny; wersje i środowisko niezweryfikowane |
| Tailwind, Shadcn/Radix | Klasy CSS i importy ui/*; brak stylów i modułów UI | Nie da się odtworzyć stosu ani wyglądu |
| TanStack Query, Wouter | Bezpośrednie importy pakietów | Potwierdzone użycie w źródle; wersje nieznane |
| React Hook Form, Zod | Brak tych importów w udostępnionych plikach | Mogą występować w brakujących modułach; tutaj niepotwierdzone |
| Express, Passport, Drizzle, PostgreSQL | Brak kodu serwera, schematu i migracji | Implementacje niedostarczone |
| Google OAuth i email/hasło | Import brakującego useAuth, odsyłacze logowania | Implementacje niedostarczone |
| Stripe Checkout, Portal, webhook | Stały priceId i przekierowanie w dashboard | Nie stanowi implementacji integracji |
| Generowanie HTML/JSON-LD, źródła, TOC, Speakable | generator przekazuje stan między brakującymi komponentami; strona informacyjna pokazuje przykłady | Brak silnika i możliwości sprawdzenia wyników |
| AI Readiness Score i walidacja | Opisy marketingowe | Brak kodu kryteriów i obliczeń |
| Limit 10/dzień i automatyczny reset | DAILY_LIMIT=10 w dashboard | Tylko stała klienta; brak resetu i egzekwowania na serwerze |
| Logo README | attached_assets/logoA_1761940165908.png nie istnieje w drzewie | Niedostarczony zasób |

## Zależności między plikami

Żaden dostępny plik TSX nie importuje bezpośrednio innego dostępnego pliku. Ich połączenie w aplikację wymaga niedostarczonego punktu wejścia i routera. Powtarzalne importy wskazują na współdzielone moduły, których nie ma.

### Generator

`generator.tsx:1–5` importuje Navigation, ContentForm, ResultsPanel, React i typ AeoContent. Tylko React jest importem pakietowym; pozostałe cztery ścieżki wymagają brakujących plików i konfiguracji aliasów.

Stan `generatedContent` jest przekazywany do ResultsPanel, a setter do `ContentForm.onContentGenerated`. To potwierdza kontrakt przepływu danych w widoku, ale nie sposób generowania, walidacji ani zapis danych.

### Dashboard

`dashboard.tsx:1–12` zależy od React, TanStack Query, Lucide oraz brakujących Navigation, ui/card, ui/button, ui/progress, shared/schema, use-toast, queryClient i useAuth.

- Typy AeoContent i User nie są zdefiniowane. Użyte pola obejmują m.in. generatedHtml, plan, subscriptionStatus i dailyUsageCount; nie pozwala to odtworzyć pełnego schematu ani typów bazy.
- `dashboard.tsx:29–31`: useQuery ma queryKey `/api/user/aeo-content`, ale nie ma lokalnego queryFn. Należy odtworzyć konfigurację QueryClient/providera; URL w queryKey sam nie wysyła zapytania.
- `dashboard.tsx:53–54`: apiRequest DELETE i invalidacja cache istnieją jako wywołania; transport i handler API nie są dostarczone.
- `dashboard.tsx:79–89`: warunek aktywnej subskrypcji, stały Stripe priceId, przekierowanie /pricing i limit 10 są logiką klienta. Nie potwierdzają ochrony zasobów, autoryzacji operacji ani rozliczeń backendu.
- Kod kopiowania HTML do schowka jest obecny. Renderowana lista i obsługa przycisków nie są dostarczone w zakończeniu pliku.

### Strony marketingowe i 404

home, enterprise, how-it-works i plans zależą od ui/button, ui/card, ui/sheet, Footer i logo z aliasu @assets oraz pakietów React, Wouter i Lucide. Card.tsx eksportuje NotFound, sam importuje ui/card i Lucide. Nazwa pliku Card.tsx nie oznacza, że spełnia importy ui/card: nie eksportuje Card ani CardContent.

Pełna macierz brakujących ścieżek i użytkowników znajduje się w poprawionym README. Jest 13 unikalnych niedostarczonych specyfikatorów importu: 12 modułów i jeden zasób PNG. Brakuje mapowania wszystkich trzech rodzin aliasów: @/, @shared/ i @assets/.

## Błędy struktury źródeł

| Plik | Konkretna obserwacja | Skutek |
| --- | --- | --- |
| dashboard.tsx | Koniec przy otwarciu Card z data-testid="card-plan-limits"; brak domknięcia return i funkcji | Fragment nie stanowi kompletnego TSX |
| home.tsx | Koniec po sekcji zastosowań; pozostaje otwarty główny div, return i funkcja | Fragment nie stanowi kompletnego TSX |
| plans.tsx | Koniec po header; pozostaje otwarty główny div, return i funkcja | Fragment nie stanowi kompletnego TSX |
| enterprise.tsx | Główny div otwarty w wierszu 18 nie jest zamknięty przed końcowym ); | Niedomknięty JSX mimo zakończenia funkcji |
| example | Zawiera wyłącznie nową linię | Brak przykładu pozwalającego sprawdzić projekt |

Generator, NotFound i HowItWorks mają widoczne zakończenia JSX/funkcji. Nie oznacza to, że przeszły kompilację lub kontrolę typów.

## API, trasy i dane wymagające wyjaśnienia

Poprzednie README deklaruje:
- GET /api/auth/user; POST /api/auth/register, /api/auth/login, /api/auth/logout; GET /auth/google.
- POST /api/aeo-content; GET /api/user/aeo-content; DELETE /api/aeo-content/:id.
- POST /api/stripe/create-checkout, /api/stripe/portal, /api/stripe/webhook.

Żaden handler nie występuje w repozytorium. W dashboard widoczne są tylko klucz zapytania listy i wywołanie DELETE. Nie sprawdzano działania endpointów na produkcji.

Brak routera i stron logowania, „O nas”, bloga oraz obsługi /pricing. Istnieją pliki odpowiadające nazwą części widoków, lecz mapowanie na URL nie jest udokumentowane w kodzie. /cennik i /pricing mogą mieć różne role; nie należy zakładać błędu trasy bez routera. Home odsyła do #pricing, ale w dostarczonym fragmencie nie ma sekcji z tym id.

Do potwierdzenia są również:
- Cena Stripe wpisana na stałe w dashboard i środowisko, do którego należy. Identyfikator ceny nie jest sekretnym kluczem API.
- Aktualne warunki planów i limitów; tekst marketingowy nie zastępuje konfiguracji produktu.
- support@aeoflow.io z README i kontakt@aeo-generator.pl w Enterprise.
- Dane prawne/kontaktowe i zakres praw do kodu. Deklarację proprietary zachowano; osobnego LICENSE nie ma.

## Zalecana kolejność prac

1. Właściciel wskazuje źródło kompletnej aplikacji i rolę tego repozytorium.
2. Przywrócenie pełnych TSX i brakujących importów, zasobów, stylów, aliasów, manifestu, lockfile i punktów wejścia.
3. Uzupełnienie kontraktów API, typów, routera, providerów i konfiguracji środowiska.
4. Jeśli repo ma zawierać pełny SaaS: uzupełnienie serwera, migracji, uwierzytelniania, integracji płatności i kontroli limitów.
5. Instalacja i build/typecheck na czystym checkoutcie, potem sprawdzenie generowania, pobierania/usuwania treści, logowania i płatności w środowisku testowym.
6. Aktualizacja instrukcji uruchomienia według faktycznie sprawdzonych komend.

## Co zmienia poprawione README

Zastępuje opis gotowego SaaS opisem faktycznej zawartości, dokumentuje braki i blokady uruchomienia, oddziela importowane technologie od niezweryfikowanych deklaracji, nie przedstawia endpointów jako działającego API i zawiera listę informacji do uzupełnienia. Nie rekonstruuje brakujących modułów ani nie zmienia kodu aplikacji.
