---
title: Variabel
date: 2025-06-11T17:22:59+07:00
update: 2025-06-11T17:22:59+07:00
tags:
  - JavaScript
  - Python
---

# Variabel

[[testing]]
[[testing-very]]
[Test Biasa](nested/testing/)
Secara sederhananya **Variabel** adalah sebuah wadah yang berisikan item tertentu atau isi tertentu. Di Matematika istilah **variabel** juga sering digunakan dan umum dipakai. Di dalam bahasa pemrograman sendiri juga sama, istilah **Variabel** Dipakai di semua jenis bahasa pemrograman.

## Contoh Variabel di JavaScript

```javascript
let usia = 10
const nama = 'Joni'
var isActive = true
```

Penjelasannya, ada 3 Variabel

- Variabel `usia` yang bernilai 10
  Kenapa pakai `let` ?. secara umum yang dinamakan usia bisa bertahan setiap saat, umumnya setiap tahun, jadi pakai `let` agar nilainya bisa diubah setiap tahun (secara logika seperti itu)
- Variabel `nama` yang bernilai `Joni`
  Kenapa pakai `const` ?. Jarang sekali orang yang ingin mengubah nama mereka setiap saat, dan itu jarang ditemui, mangkanya pakai `const` yang artinya constant Tidak bisa diubah
- Variabel `isActive` yang bernilai Boolean `true`
  Kenapa pakai `var` ?. sebenarnya `var` sudah tidak direkomendasikan, tapi perilakunya mirip `let` tapi lebih rentan, dan itu cuma untuk contoh penulisan [[Variabel Boolean]] yang berisi `true` di JavaScript Lebih Detail-nya: [[Alasan var Di JavaScript Sudah Tidak Direkomendasikan]]

> [!INFO] Terkait
>
> - [[Perbedaan const let dan var Di JavaScript]]
> - [[Tipe Data Di JavaScript]]
> - [[Cara Mendeklarasikan Variabel Di JavaScript]]
> - [[Alasan var Di JavaScript Sudah Tidak Direkomendasikan]]
> - [[Variabel Tanpa Keyword Di JavaScript]]

## Contoh Variabel di Python

```python
a = 10
nama = "Joni"
isActive = True
```

Di Python lebih mudah, tanpa perlu keyword seperti JavaScript.

> [!INFO] Terkait
>
> - [[Cara Menulis Variabel di Python]]
> - [[Jenis Tipe Data Di Python]]

---

Dibuat pada tanggal: Rabu, Juni 11, 2025, 5:22:59 sore
