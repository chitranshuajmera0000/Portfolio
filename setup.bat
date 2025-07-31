@echo off
echo 🚀 Setting up ShareIt Portfolio for deployment...

echo 📦 Installing dependencies...
call npm install

if not exist .env (
    echo 🔧 Creating .env file from template...
    copy .env.example .env
    echo ⚠️  Please edit .env file with your actual EmailJS credentials!
)

echo 🏗️ Building project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🎉 Project is ready for deployment!
    echo.
    echo Next steps:
    echo 1. Edit .env file with your EmailJS credentials
    echo 2. Test locally with: npm run dev
    echo 3. Push to GitHub
    echo 4. Deploy on Vercel
    echo 5. Add environment variables in Vercel dashboard
    echo.
    echo 📚 See DEPLOYMENT.md for detailed instructions
) else (
    echo ❌ Build failed! Please check the errors above.
)

pause
