# Refat.dev — Personal Portfolio

A modern, responsive developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, showcasing full-stack web engineering projects, deep learning research in medical imaging, technical skills, education, and verified certifications.

🔗 **Live Demo:** [refatkhan.vercel.app](https://refatkhan.vercel.app)

---

## ✨ Features

- **Interactive Hero Section:** Particle background (`react-tsparticles`), animated role typing (`react-type-animation`), direct CV viewer, and social links.
- **Filterable Project Showcase:** Category filtering (`All`, `Full-Stack`, `AI / ML`) with interactive radial spotlight hover cards and dedicated dynamic project detail routes (`/project/:projectId`).
- **Categorized Tech Stack & Timeline:** Clean breakdown of frontend, backend, database, and AI/ML tools alongside academic milestones and verified credentials (Programming Hero, Credly, 10 Minute School).
- **Working Contact Form & Privacy Controls:** Powered by **Web3Forms API** with honeypot spam protection, live status feedback, an interactive FAQ accordion, and click-to-reveal phone number masking.
- **SPA Routing & SEO Ready:** Configured with React Router, dynamic page metadata via React Helmet, a custom 404 page, and `vercel.json` rewrites for seamless client-side routing on reload.

---

## 🛠️ Tech Stack

- **Core:** React, Vite, React Router
- **Styling & Animation:** Tailwind CSS, Framer Motion
- **UI & Visual Effects:** `react-tsparticles`, `react-type-animation`, Lucide Icons, React Icons
- **SEO & Forms:** `@dr.pogodin/react-helmet`, Web3Forms API
- **Deployment:** Vercel

---

## 📁 Project Structure

```text
protfolio-refat-dev/
├── public/
│   └── resume_of_Ismail_Khan_Refat.pdf
├── src/
│   ├── assets/
│   │   ├── image.png
│   │   └── projects.json
│   ├── components/
│   │   └── Navbar.jsx
│   ├── home/
│   │   ├── Home.jsx
│   │   └── MainLayout.jsx
│   ├── routes/
│   │   └── Router.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── NotFound.jsx
│   └── main.jsx
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/refatkhan/protfolio-refat-dev.git](https://github.com/refatkhan/protfolio-refat-dev.git)
cd protfolio-refat-dev
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Contact Form (Optional)

Open `src/sections/Contact.jsx` and replace `WEB3FORMS_ACCESS_KEY` with your own access key from [Web3Forms](https://web3forms.com).

### 4. Run the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

---

## 📬 Contact

- **Name:** Ismail Khan Refat
- **Email:** [refatkhan.dev@gmail.com](mailto:refatkhan.dev@gmail.com)
- **LinkedIn:** [linkedin.com/in/refatkhan](https://www.linkedin.com/in/refatkhan/)
- **GitHub:** [github.com/refatkhan](https://github.com/refatkhan)
- **Telegram:** [@refatkhan0](https://t.me/refatkhan0)
