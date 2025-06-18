---
title: Rencana Membuat Digital Garden
date: 2025-06-13T21:57:00
update: 2025-06-13T21:57:00
tags:
  - Perencanaan
---

**Pembaruan dari**: [[Rencana Membuat Portfolio]]

# Rencana Membuat Digital Garden

Sempat terpikir untuk membuat Digital Garden saat merencanakan portfolio kemarin. Tapi aku mengalami kendala: bagaimana caranya supaya catatan dari Obsidian bisa masuk ke web dengan sempurna?

Aku tidak butuh fitur yang aneh-aneh — yang penting **plug and play**, jadi **nggak perlu ubah semua catatan** yang sudah ada di Obsidian.

---

## 🧩 Opsi yang Pernah Dicoba

### 1. Plugin Obsidian Digital Garden

Ada plugin resmi, tapi rasanya kurang memuaskan kalau tidak dibuat sendiri. Terasa kurang fleksibel dan tidak bisa aku otak-atik sesuka hati.

### 2. **Hugo**

**Positif**:

- Bagus dalam membaca front matter
- Taxonomy (tags, categories) mudah diatur

**Negatif**:

- Wikilink `[[Nama Catatan]]` **nggak terbaca**
- Bisa sih dikonversi pakai script Python → markdown link  
   Tapi balik lagi... aku **nggak pengin ubah catatan** asliku.

### 3. **Astro JS**

Ini baru banget buatku. Belum pernah nyoba sama sekali. Sekarang lagi coba belajar pelan-pelan lewat dokumentasi dan eksperimen kecil.

---

## 🎯 Tujuan Utama

Aku ingin membuat digital garden dengan fitur berikut:

- Struktur folder **tetap sama seperti di Obsidian**
- Mendukung **wikilink** (`[[Nama Catatan]]`)
- Bisa **langsung publish** catatan tanpa perlu ubah-ubah format

---

## 😵‍💫 Kendala Saat Ini

- Belum paham [[Content Collections di Astro]]
- Bingung cara pasang dan pakai plugin Astro
- Slug URL berubah jadi lowercase dan pakai dash  
   Misalnya: `Contoh Catatan` → `contoh-catatan` → link jadi **not found**
- Masih bingung harus mulai dari mana

---

## ✅ Masalah yang Sudah Terpecahkan

- **Wikilink berhasil terbaca**  
   ➤ Berkat plugin `@braindb/remark-wiki-link`

---

> [!NOTE]
> Tidak untuk sekarang, mungkin aku buat di masa mendatang

---

📝 **Dibuat:** Jumat, 13 Juni 2025, 21:57 WIB
