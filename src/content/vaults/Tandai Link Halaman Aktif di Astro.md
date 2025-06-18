---
title: Tandai Link Halaman Aktif di Astro
date: 2025-06-10T02:53:19+07:00
update: 2025-06-10T17:30:00
tags:
  - Astro-Js
---

# Tandai Halaman Link Aktif di Astro

- Dapatkan `url` Halaman saat ini
  ```javascript
  Astro.url.pathname
  ```
  Ini berisi path URL yang sedang dibuka, misalnya:` /, /about, /blog/post1`.
- Bandingkan URL menu dengan URL halaman saat ini
  Untuk setiap item menu `(item.url)`, cek:
  ```javascript
  Astro.url.pathname === item.url
  ```
  Apakah sama persis dengan URL saat ini? Atau URL halaman ini adalah bagian dari sub-path menu (untuk halaman detail misalnya):
  ```javascript
  Astro.url.pathname.startsWith(item.url)
  ```
  Tapi untuk homepage (`'/'`), harus sama persis, jangan `startsWith` supaya tidak salah aktif.
- Simpan hasil [[Operator Perbandingan]] dalam [[Variabel Boolean]], misalnya:
  ```javascript
  const isActive =
  	Astro.url.pathname === item.url || (item.url !== '/' && Astro.url.pathname.startsWith(item.url))
  ```
  Gunakan `isActive` untuk beri gaya khusus pada menu yang aktif

---

Dibuat pada tanggal: Selasa, Juni 10, 2025, 2:53:19 pagi
