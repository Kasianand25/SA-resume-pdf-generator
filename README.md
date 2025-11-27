
# 📘 SA Resume PDF Generator

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Puppeteer-PDF%20Rendering-00b5ad?style=for-the-badge&logo=puppeteer&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML%20→%20PDF-Generator-orange?style=for-the-badge&logo=google-chrome&logoColor=white" />
  <img src="https://img.shields.io/badge/Cross--platform-Build-blue?style=for-the-badge&logo=windows-terminal&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=open-source-initiative&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Stable-success?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

### Fast, Reliable & Pixel-Perfect Resume Export Tool 🚀
SA Resume PDF Generator is a lightweight Node.js tool that converts a clean, modern HTML resume into a ready-to-use PDF file.
The project uses Puppeteer to generate high-quality, print-ready PDF documents with full CSS support, images, shadows, and layout precision.

> A professional HTML-to-PDF resume rendering engine for consistent, high-quality output.
---

## 🚀 Features
- Generate PDF from an HTML template
- Automatically embed a profile photo
- Pixel-perfect rendering using Chromium engine
- Clean project structure
- Runs locally or in CI/CD (GitHub Actions ready)
- No external services required
---

```graphql
/
├── as_sv.html                   # Main HTML resume template
├── resources/
│   └── img/
│       └── photo_2022...jpg     # Profile photo
├── scripts/
│   └── make-pdf.js              # PDF generation script
├── storage/
│   └── pdf/                     # Output folder for generated PDFs
├── package.json
└── README.md

```

---


## 📦 Installation
```bash
git clone https://github.com/USERNAME/stanov-resume-pdf-generator.git
cd stanov-resume-pdf-generator
npm install

```
---

## ▶️ Generate PDF
The generated PDF will appear here:
```bash
node scripts/make-pdf.js

```

---

## 🧰 Technologies Used

- Node.js
- Puppeteer
- HTML5 / CSS3 / CSS Grid
- Chrome-based PDF rendering pipeline

---

## 📄 PDF Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/AleksandrStanov1984/SA-resume-pdf-generator/main/demo/resume-oleksandr-stanov-1.png" width="700" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/AleksandrStanov1984/SA-resume-pdf-generator/main/demo/resume-oleksandr-stanov-2.png" width="700" />
</p>

👉 Full PDF available here:  
[resume-oleksandr-stanov.pdf](https://raw.githubusercontent.com/AleksandrStanov1984/SA-resume-pdf-generator/main/demo/resume-oleksandr-stanov.pdf)



## 📜 License

MIT License