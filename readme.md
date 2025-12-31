# Youssef Gebaly's Interactive 3D Portfolio

<div align="center">
  <h3>🌐 <a href="https://youssefgebaly.com">youssefgebaly.com</a></h3>
  <p><em>Where code meets creativity in three dimensions</em></p>
</div>

<br>

## 🚀 Overview

An innovative portfolio website that reimagines how developers showcase their work. This project combines cutting-edge web technologies to create an immersive experience where visitors explore projects through a three-dimensional virtual workspace.

**Live Site:** [youssefgebaly.com](https://youssefgebaly.com)
**OS Interface:** [os.youssefgebaly.com](https://os.youssefgebaly.com)

<br>

## ✨ Features

- **Immersive 3D Environment** - Navigate through a fully interactive workspace built with Three.js
- **Custom OS Interface** - React-based operating system embedded within the 3D scene
- **Spatial Audio** - Dynamic audio system that responds to camera position and movement
- **Smooth Animations** - GSAP-powered transitions and camera controls
- **Optimized Performance** - Compressed assets, lazy loading, and efficient rendering
- **Responsive Design** - Works seamlessly across devices

<br>

## 🛠️ Tech Stack

- **3D Graphics:** Three.js, WebGL, CSS3DRenderer
- **Frontend:** React, TypeScript
- **Build Tools:** Webpack, Babel
- **Animation:** GSAP, Tween.js
- **Audio:** Web Audio API with custom spatial filters
- **Deployment:** Vercel
- **Styling:** CSS3 with custom animations

<br>

## 🏗️ Architecture

The website consists of two seamlessly integrated parts:

1. **3D Scene** (Main Repository)
   - Three.js rendering engine
   - Custom camera controls and animations
   - Spatial audio system
   - Asset management and optimization

2. **2D OS Interface** ([Inner Site](inner-site/))
   - React application embedded via iframe
   - CSS3D transforms for 3D integration
   - Project showcase and portfolio content
   - Interactive UI components

The 2D interface is rendered using Three.js's CSS3DRenderer, which applies 3D transformations to HTML elements while maintaining full interactivity.

<br>

## 🎯 Featured Projects

- **RAG Document Q&A Application** - AI-powered document analysis with Next.js 15 and Oracle AI
- **PADCEV Clinical Documentation** - Enterprise healthcare platform
- **Grafana AI Observability** - Real-time monitoring dashboard
- **Healthcare Patient Portal** - AL-Futtaim Healthcare network application

<br>

## 💻 Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/youssefgebaly321-glitch/porfolio-website.git
cd porfolio-website

# Install root dependencies
npm install

# Install inner-site dependencies
cd inner-site
npm install
cd ..
```

### Running Locally

```bash
# Start the 3D scene development server (port 8082)
npm run dev

# In a separate terminal, start the OS interface (port 3000)
cd inner-site
npm start
```

Visit `http://localhost:8082/?dev` to see the site with local development servers.

### Production Build

```bash
# Build both the inner-site and main site
npm run build

# The output will be in the 'public' directory
```

<br>

## 📁 Project Structure

```
portfolio-website/
├── src/                    # 3D scene source code
│   ├── Application/        # Main application logic
│   ├── shaders/           # GLSL shaders
│   └── index.ts           # Entry point
├── inner-site/            # 2D OS React application
│   ├── src/
│   │   ├── components/
│   │   └── assets/
│   └── package.json
├── static/                # Static assets (models, textures, audio)
├── bundler/              # Webpack configuration
└── vercel.json           # Deployment configuration
```

<br>

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from the `main` branch:

- **Main Site:** `youssefgebaly.com` (3D portfolio)
- **OS Site:** `os.youssefgebaly.com` (2D interface)

Both sites are deployed as separate Vercel projects from the same repository using different root directories.

<br>

## 📫 Contact

**Youssef Gebaly**

- Website: [youssefgebaly.com](https://youssefgebaly.com)
- LinkedIn: [linkedin.com/in/youssef-gebaly](https://linkedin.com/in/youssef-gebaly)
- Email: [youssefgebaly321@gmail.com](mailto:youssefgebaly321@gmail.com)

<br>

## 📝 License

MIT License - feel free to use this project as inspiration for your own portfolio!

<br>

---

<div align="center">
  <p>Built with ❤️ using Three.js and React</p>
  <p><em>This portfolio isn't just a showcase—it's a statement about the intersection of creativity and engineering.</em></p>
</div>
