# 📚 Docs Portal

A multi-language, versioned documentation portal built with **Next.js 16**, supporting:

- 🌍 Multi-language documentation (en, es, fr, de)
- 🗂 Versioned docs (v1, v2, v3)
- 🔎 Search functionality
- 📑 Table of Contents (On This Page)
- 📋 Copy-to-clipboard for code blocks
- 💬 Feedback submission
- 🐳 Docker support

---

## 🚀 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Marked (Markdown parser)
- Docker
- Tailwind CSS (optional styling)

---

## 📁 Project Structure

```

_docs/
├── v1/
├── v2/
├── v3/
app/
├── [locale]/docs/[version]/[slug]/page.tsx
├── components/
├── api-reference/
public/
└── openapi.json
Dockerfile
docker-compose.yml

```

---

## 🌍 Routes

Documentation route format:

```

/{locale}/docs/{version}/{slug}

```

Example:

```

/en/docs/v3/introduction

````

---

## 🛠 Installation

### 1️⃣ Install dependencies

```bash
npm install
````

### 2️⃣ Run development server

```bash
npm run dev
```

App runs on:

```
http://localhost:3000
```

---

## 🐳 Run with Docker

### Build and run:

```bash
docker-compose up --build
```

App will be available at:

```
http://localhost:3000
```

---

## 📦 Features

### ✅ Multi-language Support

Supports:

* English
* Spanish
* French
* German

### ✅ Version Switching

Switch between:

* v1
* v2
* v3

### ✅ Code Copy Feature

One-click copy for installation commands.

### ✅ Feedback Form

Users can submit feedback for documentation pages.

### ✅ Swagger API Reference

Accessible at:

```
/api-reference
```

---

## 🔧 Build for Production

```bash
npm run build
npm start
```

---

## 📌 Future Improvements

* Persistent dark/light theme
* Full-text search indexing
* Authentication for feedback storage
* Deployment to Vercel

---

## 👩‍💻 Author

Built as part of a Multi-Language Documentation Portal assignment.

---