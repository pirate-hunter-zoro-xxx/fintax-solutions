# FinTax Solutions - Professional Financial Services

A modern, responsive website for FinTax Solutions built with Next.js 15, TypeScript, and Tailwind CSS. Optimized for performance and ready for production deployment on Vercel.

## 🌟 Features

- **Modern Design**: Professional, clean layout with responsive design
- **Performance Optimized**: Built with Next.js 15 and optimized for Core Web Vitals
- **SEO Ready**: Proper meta tags, semantic HTML, and sitemap
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized images, fonts, and assets
- **TypeScript**: Fully typed for better development experience
- **Accessible**: WCAG compliant design principles

## 📄 Pages

- **Home** (`/`) - Hero section, impact stats, services overview, and why choose us
- **Services** (`/services`) - Complete listing of all 11 financial services
- **About** (`/about`) - Company story, mission, and values
- **Contact** (`/contact`) - Contact information and business details

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fintax

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About Us page
│   ├── contact/page.tsx        # Contact page
│   ├── services/page.tsx       # Services page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── Header.tsx              # Navigation header
│   └── Footer.tsx              # Site footer
└── public/
    └── images/
        └── fintax-logo.svg     # Company logo
```

## 🚀 Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? **Your account**
   - Link to existing project? **N**
   - Project name: **fintax-solutions**
   - Directory: **./**
   - Override settings? **N**

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: (leave empty)
6. Click "Deploy"

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Update the values in `.env.local`:
- `NEXT_PUBLIC_APP_URL`: Your Vercel domain
- `NEXT_PUBLIC_PHONE`: Business phone number
- `NEXT_PUBLIC_EMAIL`: Business email

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## 🎨 Customization

### Brand Colors
The website uses a professional color scheme:
- Primary: `#1650bb` (Blue)
- Background: `#111722` (Dark)
- Cards: `#243047` (Medium Dark)
- Text: `#93a6c8` (Light Blue)

### Logo & Images
- Replace `/public/images/fintax-logo.svg` with your logo
- Update service images in the services grid
- Add your company photos to public/images/

### Content
- Update company information in all pages
- Modify service descriptions in `/src/app/services/page.tsx`
- Update contact details in `/src/app/contact/page.tsx`

## 📱 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Optimized Google Fonts loading
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages for better performance
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers

## 🔧 Production Optimizations

The site includes several production optimizations:
- Standalone output for efficient deployment
- Security headers (X-Frame-Options, Content-Security-Policy)
- Image domain allowlisting
- Disabled telemetry for faster builds
- Optimized CSS and JavaScript bundles

## 📊 Analytics Setup

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Add the GA script to your layout

## 🆘 Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Ensure all environment variables are set

## 🔄 Updates

To update the site:
1. Make changes locally
2. Test with `npm run build`
3. Push to your repository
4. Vercel will automatically redeploy

---

**Built with ❤️ for FinTax Solutions**
