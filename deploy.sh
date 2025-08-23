#!/bin/bash

# FinTax Solutions - Deployment Script for Vercel

echo "🚀 Starting FinTax Solutions deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Run type checking
echo "🔍 Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type check failed. Please fix type errors before deploying."
    exit 1
fi

# Run linting
echo "🧹 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found. Consider fixing them before deploying."
fi

# Run build to ensure everything works
echo "🏗️  Testing production build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix build errors before deploying."
    exit 1
fi

echo "✅ All checks passed!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Visit your Vercel dashboard to view the deployment"
echo "2. Configure your custom domain if needed"
echo "3. Set up environment variables in Vercel dashboard"
echo "4. Monitor your deployment for any issues"
