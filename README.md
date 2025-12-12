[README.md](https://github.com/user-attachments/files/24123959/README.md)
# AEOFLOW - Answer Engine Optimization Generator

<p align="center">
  <img src="attached_assets/logoA_1761940165908.png" alt="AEOFLOW Logo" width="120">
</p>

<p align="center">
  <strong>Professional SaaS platform for generating AI-optimized content with structured data</strong>
</p>

<p align="center">
  <a href="https://aeoflow.io">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#api-reference">API</a>
</p>

---

## Overview

AEOFLOW is a paid SaaS application that generates Answer Engine Optimization (AEO) content, specifically structured for AI search engines and voice assistants. It incorporates Schema.org-compliant HTML and JSON-LD markup to enhance content visibility and understanding by AI systems like ChatGPT, Google SGE, Perplexity, and voice assistants.

### What is AEO?

Answer Engine Optimization (AEO) is the next evolution of SEO, focusing on optimizing content for AI-powered search engines and voice assistants that provide direct answers rather than traditional link lists.

## Features

### Content Generation
- **AEO-optimized HTML** with Schema.org microdata
- **8 types of JSON-LD schemas**: Article, FAQPage, HowTo, BreadcrumbList, SpeakableSpecification, WebSite, Organization, Person
- **Up to 3 citation sources** for references
- **Dynamic Table of Contents** generation
- **Voice AI optimization** with Speakable specification

### AI Readiness Scoring
- Real-time content validation
- AI optimization criteria scoring
- Visual feedback with progress indicators
- Actionable improvement suggestions

### Generated Output Includes
- HTML Microdata Fragment
- Open Graph & Twitter Meta Tags
- Speakable specification for Voice AI
- Complete JSON-LD structured data
- Mobile-responsive styling
- Professional typography (Inter font family)

### Business Features
- **Subscription model**: Lite plan with 10 pages/day limit
- **Stripe integration** for payments
- **Google OAuth** and Email/Password authentication
- **User dashboard** for content management
- **Daily usage tracking** with automatic reset

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Shadcn/UI** (Radix UI primitives)
- **TanStack Query** for state management
- **Wouter** for client-side routing
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Passport.js** for authentication
- **Drizzle ORM** for database operations

### Database
- **PostgreSQL** (Neon Database compatible)
- Type-safe schema with Zod validation

### Payments
- **Stripe** Checkout and webhooks
- Customer Portal integration

## Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)
- Google OAuth credentials (for authentication)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route pages
│   │   ├── lib/            # Utilities and AEO generator
│   │   └── hooks/          # Custom React hooks
│   └── public/             # Static assets
├── server/                 # Backend Express application
│   ├── routes.ts           # API endpoints
│   ├── storage.ts          # Database operations
│   ├── auth.ts             # Authentication logic
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Drizzle ORM schema
└── package.json
```

## API Reference

### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/user` | GET | Get current user |
| `/api/auth/register` | POST | Register with email/password |
| `/api/auth/login` | POST | Login with email/password |
| `/api/auth/logout` | POST | Logout current user |
| `/auth/google` | GET | Google OAuth login |

### Content
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/aeo-content` | POST | Generate AEO content |
| `/api/user/aeo-content` | GET | Get user's content |
| `/api/aeo-content/:id` | DELETE | Delete content |

### Payments
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/stripe/create-checkout` | POST | Create Stripe checkout |
| `/api/stripe/portal` | POST | Access customer portal |
| `/api/stripe/webhook` | POST | Stripe webhook handler |

## License

Copyright (c) 2025 Ethirion Sp. z o.o.

All rights reserved.

This software and its source code are proprietary.
Unauthorized copying, modification, distribution or use
of this software, via any medium, is strictly prohibited.

## Contact
- **Website**: https://aeoflow.io/
- **Company**: Ethirion Sp. z o.o.
- **Email**: support@aeoflow.io
- **Phone**: +48 668 392 135
- **Address**: 3 Maja 23, 42-400 Zawiercie, Poland

---

<p align="center">
  Made with ❤️ by <a href="https://aeoflow.io">AEOFLOW</a>
</p>
