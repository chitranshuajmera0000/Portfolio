#!/bin/bash

# ShareIt Portfolio - Quick Setup Script
# Run this script to set up the project for deployment

echo "🚀 Setting up ShareIt Portfolio for deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔧 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your actual EmailJS credentials!"
fi

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Project is ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Edit .env file with your EmailJS credentials"
    echo "2. Test locally with: npm run dev"
    echo "3. Push to GitHub"
    echo "4. Deploy on Vercel"
    echo "5. Add environment variables in Vercel dashboard"
    echo ""
    echo "📚 See DEPLOYMENT.md for detailed instructions"
else
    echo "❌ Build failed! Please check the errors above."
fi
