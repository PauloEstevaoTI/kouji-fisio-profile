# Landing Page - Fisioterapeuta

Landing page responsiva e moderna para fisioterapeuta que atende particular, desenvolvida em **React** e **Tailwind CSS**.

## 📋 Índice

- [Características](#características)
- [Estrutura de Componentes](#estrutura-de-componentes)
- [Documentação de Estilos](#documentação-de-estilos)
- [Otimizações](#otimizações)
- [Como Personalizar](#como-personalizar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## ✨ Características

### Seções da Landing Page

1. **Hero** - Apresentação profissional com:
   - Nome e credenciais (CREFITO)
   - Descrição profissional
   - CTAs para agendamento
   - Estatísticas (anos de experiência, pacientes atendidos, satisfação)
   - Animações fadeInUp

2. **Carrossel de Tratamentos**
   - 4 slides com imagens e descrições
   - Navegação por setas e dots
   - Autoplay com pause on hover
   - Drag/swipe em dispositivos móveis
   - Responsivo (3 slides → 2 → 1)

3. **Dinâmica de Fisioterapia** (Serviços)
   - 6 cards de serviços com ícones
   - Animações stagger
   - Fluxo de tratamento em 4 etapas

4. **Galeria**
   - Filtros por categoria (Todos, Consultório, Tratamentos, Equipamentos)
   - Lightbox modal com navegação
   - Grid responsivo
   - Animações de entrada

5. **Sobre o Profissional**
   - Biografia detalhada
   - 4 destaques profissionais com ícones
   - Imagem do profissional

6. **Linha do Tempo** (Timeline)
   - Formações acadêmicas e cursos
   - 6 marcos (2014-2025)
   - Layout diferenciado para desktop e mobile
   - Ícones personalizados por tipo de formação

7. **Formulário de Contato**
   - Campos: Nome, E-mail, WhatsApp, Motivo
   - Validação completa com React Hook Form
   - Informações de contato e horários
   - Feedback com toast notifications

8. **Footer**
   - Links rápidos
   - Informações de contato
   - Redes sociais
   - Copyright e políticas

## 🏗️ Estrutura de Componentes

```
/
├── App.tsx                    # Componente principal
├── components/
│   ├── Hero.tsx               # Seção hero
│   ├── ServicesCarousel.tsx   # Carrossel de tratamentos
│   ├── Services.tsx           # Dinâmica de Fisioterapia
│   ├── Gallery.tsx            # Galeria com lightbox
│   ├── About.tsx              # Sobre o profissional
│   ├── Timeline.tsx           # Linha do tempo
│   ├── ContactForm.tsx        # Formulário de contato
│   └── Footer.tsx             # Rodapé
└── styles/
    └── globals.css            # Estilos globais e tokens
```

### Componentes Shadcn/UI Utilizados

- `Button` - Botões com variantes
- `Input` - Campos de texto
- `Textarea` - Campo de texto longo
- `Label` - Labels de formulário
- `Toaster/toast` - Notificações

## 🎨 Documentação de Estilos

### Sistema de Cores

```css
/* Cores Principais */
--primary: Teal (#0d9488 - teal-600)
--secondary: Blue (#2563eb - blue-600)
--accent: Gradiente teal-to-blue

/* Cores de Fundo */
--bg-primary: white
--bg-secondary: gray-50, blue-50 (gradientes)
--bg-dark: gray-900

/* Cores de Texto */
--text-primary: gray-800
--text-secondary: gray-600
--text-light: gray-400
```

### Bordas Arredondadas

Todos os elementos seguem o padrão de **8-12px**:

```css
/* Cards e containers */
rounded-xl    /* 12px - usado em cards principais */
rounded-2xl   /* 16px - usado em seções destacadas */
rounded-lg    /* 8px - usado em botões e inputs */
rounded-full  /* badges e avatares */
```

### Tipografia

A tipografia é definida no `globals.css` e **não deve ser sobrescrita** com classes Tailwind, a menos que solicitado:

```css
h1: text-2xl (48px), font-medium
h2: text-xl (32px), font-medium
h3: text-lg (24px), font-medium
h4: text-base (16px), font-medium
p: text-base (16px), font-normal
```

### Gradientes

```css
/* Gradiente principal (usado em títulos e botões) */
bg-gradient-to-r from-teal-600 to-blue-600

/* Gradiente de fundo */
bg-gradient-to-br from-blue-50 via-white to-teal-50
bg-gradient-to-br from-gray-50 to-blue-50

/* Overlays de imagem */
bg-gradient-to-t from-black/70 to-transparent
```

### Sombras

```css
shadow-lg     /* Sombra padrão para cards */
shadow-xl     /* Sombra elevada para elementos hover */
shadow-2xl    /* Sombra intensa para imagens principais */
```

## 🚀 Otimizações

### Lazy Loading

Todas as imagens utilizam `loading="lazy"` para carregamento diferido:

```jsx
<ImageWithFallback
  src="..."
  alt="..."
  loading="lazy"
/>
```

### Responsive Images (srcset)

Imagens adaptam-se à largura da viewport:

```jsx
<ImageWithFallback
  src="..."
  srcSet="
    url?w=640 640w,
    url?w=1080 1080w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Acessibilidade (ARIA)

- Labels descritivos em todos os inputs
- `aria-label` em botões de ícone
- `aria-invalid` e `aria-describedby` em campos com erro
- `role="alert"` em mensagens de erro
- `role="main"` na tag main

### SEO e Open Graph

Configurado automaticamente no `App.tsx`:

```jsx
// Title tag
document.title = "Dr. João Silva - Fisioterapeuta..."

// Meta tags
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:image" content="..." />
<meta name="keywords" content="..." />
```

### Animações (Motion)

#### fadeInUp (padrão)
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Stagger (múltiplos elementos)
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
```

#### Hover Effects
```jsx
whileHover={{ y: -10, scale: 1.02 }}
```

## 🔧 Como Personalizar

### 1. Dados do Profissional

**Hero.tsx** - Linha 33-51
```jsx
<h1 className="mb-6">
  <span className="block text-gray-800">Olá, sou</span>
  <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
    Dr. João Silva  {/* EDITAR AQUI */}
  </span>
</h1>
```

**Estatísticas** - Linha 62-74
```jsx
<div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
  <div>
    <div className="text-teal-600 mb-1">10+</div>  {/* EDITAR */}
    <p className="text-gray-600 text-sm">Anos de Experiência</p>
  </div>
  {/* ... */}
</div>
```

**CREFITO** - Linha 106
```jsx
<div className="text-center">
  <div className="text-teal-600 mb-1">CREFITO</div>
  <p className="text-gray-800">123456-F</p>  {/* EDITAR */}
</div>
```

### 2. Imagens

**Substituir imagens do Unsplash por próprias:**

1. Importe a imagem:
```jsx
import minhaFoto from "./assets/minha-foto.jpg";
```

2. Use no ImageWithFallback:
```jsx
<ImageWithFallback
  src={minhaFoto}
  alt="Descrição"
/>
```

### 3. Serviços

**Services.tsx** - Linha 8-40
```jsx
const services = [
  {
    icon: Activity,
    title: "Nome do Serviço",
    description: "Descrição do serviço"
  },
  // Adicionar/editar serviços
];
```

### 4. Timeline

**Timeline.tsx** - Linha 9-46
```jsx
const timelineItems = [
  {
    year: "2025",
    icon: Star,
    title: "Título da Formação",
    institution: "Nome da Instituição",
    type: "Tipo de Curso",
    color: "from-purple-500 to-pink-500"
  },
  // Adicionar/editar formações
];
```

### 5. Galeria

**Gallery.tsx** - Linha 19-53
```jsx
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "url-da-imagem",
    category: "consultorio" | "tratamentos" | "equipamentos",
    title: "Título da Imagem"
  },
  // Adicionar/editar imagens
];
```

### 6. Informações de Contato

**ContactForm.tsx** - Linha 88-126
```jsx
<a href="tel:+5511999999999">  {/* EDITAR telefone */}
  (11) 99999-9999
</a>

<a href="mailto:contato@fisiojoaosilva.com.br">  {/* EDITAR email */}
  contato@fisiojoaosilva.com.br
</a>

{/* EDITAR endereço - Linha 115-120 */}
<p className="text-gray-600">
  Rua Exemplo, 123 - Sala 45<br />
  Jardins, São Paulo - SP<br />
  CEP: 01234-567
</p>
```

**Horários** - Linha 129-145
```jsx
<div className="space-y-3 text-gray-600">
  <div className="flex justify-between">
    <span>Segunda a Sexta:</span>
    <span>8h - 19h</span>  {/* EDITAR */}
  </div>
  {/* ... */}
</div>
```

### 7. Redes Sociais

**Footer.tsx** - Linha 64-88
```jsx
<a
  href="https://facebook.com"  {/* EDITAR link */}
  target="_blank"
  rel="noopener noreferrer"
>
  <Facebook className="w-5 h-5" />
</a>
```

## 📦 Tecnologias Utilizadas

- **React** - Framework
- **Tailwind CSS** - Estilização
- **Motion (Framer Motion)** - Animações
- **React Hook Form** - Validação de formulários
- **react-slick** - Carrossel
- **lucide-react** - Ícones
- **Shadcn/UI** - Componentes
- **Sonner** - Toast notifications

## 📝 Placeholders de Exemplo

### Dados Fictícios

Todos os dados são placeholders e devem ser substituídos:

- **Nome:** Dr. João Silva
- **CREFITO:** 123456-F
- **Telefone:** (11) 99999-9999
- **Email:** contato@fisiojoaosilva.com.br
- **Endereço:** Rua Exemplo, 123 - Sala 45, Jardins, São Paulo - SP
- **Redes Sociais:** Links genéricos (facebook.com, instagram.com, linkedin.com)

### Imagens

Todas as imagens são do **Unsplash** e devem ser substituídas por imagens reais do profissional, consultório e tratamentos.

## 🎯 Próximos Passos Sugeridos

- Integrar formulário com backend ou serviço de email (EmailJS, Formspree)
- Adicionar Google Analytics para métricas
- Configurar WhatsApp Business API para agendamentos diretos
- Implementar sistema de agendamento online
- Adicionar blog ou seção de artigos
- Criar versão multi-idioma

---

**Desenvolvido com React, Tailwind CSS e Motion**
