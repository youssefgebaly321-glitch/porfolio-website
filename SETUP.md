# Youssef Gebaly Portfolio - Setup Guide

## ✅ What Was Done

I've successfully cloned and customized Henry Heffernan's portfolio for you! Here's everything that was set up:

### 1. **Cloned Both Repositories**
- ✅ Main 3D Portfolio: `henryjeff/portfolio-website`
- ✅ Inner OS Site: `henryjeff/portfolio-inner-site`

### 2. **Personalized All Content**
- ✅ Replaced "Henry Heffernan" → "Youssef Gebaly" throughout
- ✅ Updated all meta tags and SEO information
- ✅ Changed BIOS screen to "Gebaly, Youssef Inc."
- ✅ Updated loading screen text
- ✅ Changed iframe title to "YoussefOS"
- ✅ Updated URLs to point to youssefgebaly.com

### 3. **Fixed Build Configuration**
- ✅ Created `.babelrc` with React/TypeScript presets
- ✅ Installed all 658 npm dependencies
- ✅ Successfully built the project
- ✅ Output generated in `public/` folder

### 4. **All Assets Included**
- ✅ 3D Models (GLB files): Computer, Environment, Decor
- ✅ Baked textures for all models
- ✅ Audio files: keyboard clicks, mouse sounds, ambient office, radio
- ✅ Monitor video textures and layers
- ✅ UI icons and cursors

## 🚀 How to Run

### Development Mode
```bash
npm run dev
```
This starts the Webpack dev server with hot reload.

### Production Build
```bash
npm run build
```
Output will be in the `public/` folder.

### Start Express Server
```bash
npm start
```
Serves the built files via Express.

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── Application/          # Main Three.js app
│   │   ├── Camera/           # Camera systems
│   │   ├── World/            # 3D scene objects
│   │   ├── UI/               # React UI components
│   │   └── Utils/            # Helpers
│   ├── index.html            # Main HTML
│   ├── script.ts             # Entry point
│   └── style.css             # Base styles
├── static/
│   ├── models/               # GLTF 3D models
│   ├── audio/                # Sound effects
│   ├── textures/             # Images & videos
│   └── draco/                # Compression libs
├── public/                   # Build output
├── server/                   # Express server
└── bundler/                  # Webpack configs
```

## 🎯 Next Steps

### For Local Development:
1. Run `npm run dev` to start the dev server
2. Open `http://localhost:8080` (or whatever port it shows)
3. The inner site iframe currently points to `https://os.youssefgebaly.com/`

### For the Inner Site:
The inner site repository is in `inner-site/` folder. To set it up:
```bash
cd inner-site
npm install
npm run dev      # Start Next.js dev server on port 3000
```

Then add `?dev` to your main portfolio URL to use the local inner site.

### To Deploy:
1. Build both projects:
   - Main: `npm run build` (outputs to `public/`)
   - Inner: `cd inner-site && npm run build`

2. Deploy main site to your hosting
3. Deploy inner site separately (it's a Next.js app)
4. Update the iframe URL in `src/Application/World/MonitorScreen.ts` line 187

## 🔧 Key Files to Customize

### Your Information:
- `src/Application/UI/components/InfoOverlay.tsx` - Name display
- `src/Application/UI/components/LoadingScreen.tsx` - BIOS screen
- `src/index.html` - Meta tags, title, description

### Inner Site URL:
- `src/Application/World/MonitorScreen.ts` - Line 187 (production URL)
- `src/Application/World/MonitorScreen.ts` - Line 197 (dev URL)

### 3D Assets:
- Replace models in `static/models/` with your own GLB files
- Update textures in `static/textures/`
- Modify audio in `static/audio/`

## 📝 Important Notes

- The build has some warnings about large file sizes - this is normal
- The 3D models use Draco compression
- WebGL is required - the site checks for it on load
- Best viewed on desktop (mobile warning included)
- Press 'F' for free camera mode when running

## 🎨 Current Customizations

All instances of Henry's info have been replaced with:
- **Name**: Youssef Gebaly
- **Company**: Gebaly, Youssef Inc.
- **BIOS**: YGBIOS (C)2025
- **Site**: youssefgebaly.com
- **Year**: 2025

## 📦 Technologies Used

- **Three.js** - 3D graphics
- **React** - UI components
- **TypeScript** - Type safety
- **Webpack** - Bundling
- **Express** - Server
- **GSAP** - Animations
- **CSS3DRenderer** - Monitor screen integration

## License

MIT License (from original repository)

---

**Ready to customize further? The code is all yours! 🚀**