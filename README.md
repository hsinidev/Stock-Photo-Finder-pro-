
# Stellar Stock Photo Finder

<div align="center">
  <img src="public/favicon.svg" alt="Stellar Stock Logo" width="100" />
  <h1>Stellar Stock Photo Finder</h1>
  <p>
    <b>A beautifully designed, modern web application for discovering stunning, free-to-use stock photos, set against an immersive animated galaxy background.</b>
  </p>
  <p>
    <a href="https://github.com/hsinidev/stellar-stock-photo-finder/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT"></a>
    <a href="https://github.com/hsinidev/stellar-stock-photo-finder/pulls"><img src="https://img.shields.io/badge/Contributions-welcome-brightgreen.svg?style=for-the-badge" alt="Contributions Welcome"></a>
    <a href="https://stellarstockphotofinder.doodax.com"><img src="https://img.shields.io/badge/Live%20Demo-Online-blue.svg?style=for-the-badge" alt="Live Demo"></a>
  </p>
  
  <h3>
    🚀 <a href="https://stellarstockphotofinder.doodax.com" target="_blank">LIVE DEMO</a>
  </h3>
</div>

---

## 📖 Project Description

**Stellar Stock Photo Finder** is a modern frontend application that redefines the image search experience. Instead of a sterile utility, we provide an immersive environment where finding visual assets feels like exploring the cosmos.

Built with **React 19** and **TypeScript**, and styled with **Tailwind CSS**, the application leverages the **Pexels API** to provide instant access to millions of high-quality images. The UI features a custom "Smoky Galaxy" animated background, glassmorphism design elements, and a responsive masonry grid layout that adapts beautifully to any device.

Beyond functionality, this project focuses on **SEO best practices**, including full JSON-LD Schema markup, semantic HTML5 structure, and optimized metadata, making it a case study in modern, SEO-friendly Single Page Application (SPA) development.

## ✨ Key Features

-   🌌 **Immersive Galaxy UI**: A unique, animated starfield with a smoky fog overlay provides a relaxing and beautiful browsing experience.
-   ⚡ **Blazing Fast Search**: Powered by the Pexels API to deliver relevant, high-resolution images instantly.
-   🎨 **Advanced Filtering**: Narrow down your search with intuitive filters for orientation (landscape, portrait, square) and size.
-   📱 **Fully Responsive Design**: Enjoy a seamless experience across all devices, from mobile phones to desktops.
-   🖱️ **Masonry Grid Layout**: Images are displayed in a Pinterest-style layout that respects their original aspect ratios.
-   🔒 **Secure & Private**: Your API key is stored only in your browser's session storage, ensuring your credentials remain private.
-   📘 **Comprehensive SEO Guide**: Includes a detailed, built-in guide on stock photography, licensing, and ethical usage with rich snippet support.

## 📂 Project Structure

```
stellar-stock-photo-finder/
├── public/              # Static assets
│   ├── favicon.svg      # Application icon
│   ├── robots.txt       # SEO crawler directives
│   └── sitemap.xml      # Website structure for search engines
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── Layout.tsx   # Main wrapper with background & navigation
│   │   ├── Modal.tsx    # Reusable modal dialog
│   │   ├── ImageFinderTool.tsx # Core search & gallery logic
│   │   └── SeoArticle.tsx # Content-rich SEO guide
│   ├── services/        # API integration services
│   │   └── ImageApi.ts  # Pexels API fetch logic
│   ├── types.ts         # TypeScript interfaces
│   ├── App.tsx          # Main application entry
│   └── index.tsx        # DOM rendering
├── index.html           # HTML entry point with meta tags
└── package.json         # Dependencies and scripts
```

## 🛠️ Technology Stack

-   **Frontend:** [React 19](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **API Integration:** [Pexels API](https://www.pexels.com/api/)
-   **Build Tool:** [Vite](https://vitejs.dev/) (implied by structure)

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   A modern web browser (Chrome, Firefox, Safari, Edge).
-   A Pexels API Key.

#### Obtaining a Pexels API Key
1.  Navigate to the **[Pexels API page](https://www.pexels.com/api/)**.
2.  Sign up or log in with your Pexels account.
3.  Request an API key. It's completely free and instant.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/stellar-stock-photo-finder.git
    cd stellar-stock-photo-finder
    ```
2.  **Install dependencies** (if using Node.js):
    ```bash
    npm install
    ```
3.  **Launch the application:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` in your browser.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! We believe in the power of community and are happy to review any suggestions or pull requests.

1.  **Fork** the project.
2.  Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information. All images sourced from Pexels are subject to the [Pexels License](https://www.pexels.com/license/).

## 📬 Contact

**HSINI MOHAMED**

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
-   **Website**: [doodax.com](https://doodax.com)

---

Built with ❤️ and a passion for beautiful design.
