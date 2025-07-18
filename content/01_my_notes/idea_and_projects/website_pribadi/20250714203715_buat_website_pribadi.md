---
id: "20250714203715"
title: Buat Website Pribadi
tags:
  - hugo
created: 2025-07-14T20:37:15+07:00
updated: 2025-07-14T20:37:15+07:00
---

## Milestone 1: Setup Proyek Dasar

- [x] Buat repositori `notes-website` di Github  
- [x] Inisialisasi Hugo site (`hugo new theme`)  
- [ ] Buat struktur folder rapi
- [ ] Testing `hugo server` berjalan lancar  
- [ ] Upload 5-10 catatan markdown dari Obsidian untuk sample

---

## Milestone 2: Styling Dasar & SCSS

- [ ] Siapkan SCSS pipeline Hugo Pipes  
- [ ] Struktur SCSS modular (reset, variables, typography, layout, components)  
- [ ] Implementasi **dark/light mode toggle**  
- [ ] Setup typography (Inter / Noto Sans + Fira Code)  
- [ ] Layout dasar:
	- 3-column desktop
	- 2-column tablet
	- 1-column mobile
- [ ] Gunakan warna dan spacing nyaman dibaca

---

## Milestone 3: Sidebar & Navigasi
- [ ] **Left Sidebar:**
	- Logo + Title
	- Search input placeholder
	- Tree view navigasi dari folder `content/`
- [ ] **Right Sidebar:**
	- TOC placeholder
	- Tags cloud placeholder
	- Konten terbaru
- [ ] Offcanvas toggle untuk tablet dan mobile sidebar

---

## Milestone 4: Python Helper Script
- [ ] Buat `scripts/generate_index.py` untuk:
	- Scan folder `content/`
	- Generate `_index.md` otomatis jika tidak ada
	- Tambah frontmatter standar (`title`, `date`)
- [ ] Testing agar folder baru auto terdeteksi Hugo tanpa manual `_index.md`

---

## Milestone 5: Lunr.js Search
- [ ] Setup output JSON (`index.json`) dari Hugo  
- [ ] Tambahkan Lunr.js ke website  
- [ ] Buat input pencarian berfungsi:
	- Menampilkan hasil real-time
	- Highlight hasil yang cocok
	- Navigasi ke halaman saat klik hasil

---

## Milestone 6: Refinement Layout
- [ ] Heading render hook
- [ ] Styling TOC agar sticky dan auto-highlight saat scroll  
- [ ] Styling tree view navigasi (expand/collapse)  
- [ ] Styling tags cloud  
- [ ] Styling konten agar nyaman untuk _reading notes_  
- [ ] Penyesuaian Syntax Highlighter 
- [ ] Callout render hook 
- [ ] Integrasi Wikilink
- [ ] Blockquote render hook
- [ ] Image render hook
- [ ] Tambahkan animasi transisi halus (optional)

---

## Milestone 7: Deployment ke Github Pages
- [ ] Setup Github Actions untuk auto-deploy saat push ke `main`  
- [ ] Cek live URL (`username.github.io/notes-website/`)  
- [ ] Test akses di mobile dan desktop

---

## Milestone 8: Optimisasi & Tambahan (opsional, ongoing)
- [ ] Link Preview tooltip
- [ ] Tambahkan PWA untuk offline notes  
- [ ] Sitemap & robots.txt untuk SEO  
- [ ] Google Analytics / Umami (jika perlu)  
- [ ] Image optimization pipeline untuk konten yang mengandung gambar  
- [ ] Backup notes otomatis dari Obsidian ke Github  
- [ ] Sinkronisasi via Github CI agar update catatan otomatis trigger rebuild

---

## Tabel Ringkas

|Milestone|Estimasi|
|---|---|
|Milestone 1: Setup Proyek|2 hari|
|Milestone 2: Styling Dasar|3-5 hari|
|Milestone 3: Sidebar & Nav|3 hari|
|Milestone 4: Python Helper|1-2 hari|
|Milestone 5: Lunr.js Search|3 hari|
|Milestone 6: Refinement Layout|3-5 hari|
|Milestone 7: Deployment|1-2 hari|
|Milestone 8: Optimisasi|Ongoing|

---



