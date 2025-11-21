import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { ServicesCarousel } from "./components/ServicesCarousel";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";

/**
 * Landing Page para Fisioterapeuta
 *
 * Estrutura:
 * - Hero: Apresentação profissional com CTA
 * - ServicesCarousel: Carrossel de tratamentos
 * - Services: Dinâmica de Fisioterapia (serviços detalhados)
 * - Gallery: Galeria com lightbox e filtros
 * - About: Sobre o profissional
 * - Experience: Trajetória profissional (linha do tempo)
 * - ContactForm: Formulário de contato (nome, email, WhatsApp, motivo)
 * - Footer: Informações e links
 *
 * Features:
 * - Animações Motion (fadeInUp, stagger, carousel drag)
 * - Bordas arredondadas (8-12px)
 * - Lazy-load e srcset para otimização
 * - ARIA labels para acessibilidade
 * - SEO e Open Graph meta tags
 * - Componentes modulares e reutilizáveis
 */

export default function App() {
  // SEO Meta Tags
  useEffect(() => {
    // Update document title
    document.title =
      "Dr. João Silva - Fisioterapeuta Especializado em Ortopedia e Esporte";

    // Meta description
    const metaDescription = document.querySelector(
      'meta[name="description"]',
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Fisioterapeuta especializado em reabilitação ortopédica e esportiva. Mais de 10 anos de experiência. Atendimento particular em São Paulo.",
      );
    }

    // Open Graph tags
    const ogTags = [
      {
        property: "og:title",
        content:
          "Dr. João Silva - Fisioterapeuta Especializado",
      },
      {
        property: "og:description",
        content:
          "Tratamentos personalizados de fisioterapia ortopédica e esportiva",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?w=1200",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "fisioterapia, fisioterapeuta, reabilitação, ortopedia, esportiva, São Paulo",
      },
    ];

    ogTags.forEach((tag) => {
      let meta = document.querySelector(
        tag.property
          ? `meta[property="${tag.property}"]`
          : `meta[name="${tag.name}"]`,
      );
      if (!meta) {
        meta = document.createElement("meta");
        if (tag.property) {
          meta.setAttribute("property", tag.property);
        } else if (tag.name) {
          meta.setAttribute("name", tag.name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", tag.content);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <Header />

      {/* Main content with semantic HTML */}
      <main role="main">
        <Hero />
        <ServicesCarousel />
        <Services />
        <About />
        <Experience />
        <ContactForm />
      </main>

      <Footer />

      {/* Toast notifications */}
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}