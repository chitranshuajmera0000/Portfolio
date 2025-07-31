# Deployment Checklist ✅

## Pre-Deployment Steps

### 1. Environment Variables Setup
- [ ] Copy `.env.example` to `.env`
- [ ] Fill in your EmailJS credentials in `.env`
- [ ] Test contact form locally
- [ ] Verify all environment variables are working

### 2. Code Quality
- [ ] Run `npm run lint` to check for linting errors
- [ ] Run `npm run build` to ensure project builds successfully
- [ ] Test the built version with `npm run preview`
- [ ] Check all pages and functionality work correctly

### 3. GitHub Preparation
- [ ] Ensure `.gitignore` includes `.env` files
- [ ] Commit all changes
- [ ] Push to GitHub repository

## Vercel Deployment Steps

### 1. Vercel Setup
- [ ] Create Vercel account (if not already done)
- [ ] Import GitHub repository in Vercel
- [ ] Configure build settings (auto-detected for Vite)

### 2. Environment Variables in Vercel
Add these environment variables in Vercel dashboard:
- [ ] `VITE_EMAILJS_SERVICE_ID` - Your EmailJS Service ID
- [ ] `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS Template ID  
- [ ] `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS Public Key
- [ ] `VITE_CONTACT_EMAIL` - Your contact email address

### 3. Deploy
- [ ] Click Deploy in Vercel
- [ ] Wait for deployment to complete
- [ ] Test live website functionality

## Post-Deployment Testing

### 1. Functionality Tests
- [ ] Test all navigation links
- [ ] Test responsive design on different devices
- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Check all animations and effects work

### 2. Performance Tests
- [ ] Run Lighthouse audit
- [ ] Check page load speeds
- [ ] Verify SEO metadata
- [ ] Test accessibility features

### 3. Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile browsers

## EmailJS Configuration

### Required EmailJS Setup:
1. **Service**: Connect your email provider (Gmail recommended)
2. **Template**: Create template with these variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `message` - Message content
   - `to_email` - Your email (recipient)

3. **Template Example**:
```
From: {{from_name}} ({{from_email}})
To: {{to_email}}

New message from your portfolio:

{{message}}
```

## Troubleshooting

### Common Issues:
1. **Environment variables not working**: Ensure they start with `VITE_`
2. **EmailJS not sending**: Check service and template IDs are correct
3. **Build errors**: Run `npm install` and try again
4. **CORS issues**: Verify EmailJS public key is correct

### Support Resources:
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
