---
title: For Loop Di JavaScript
date: 2025-06-13T17:44:57+07:00
update: 2025-06-13T17:44:57+07:00
tags:
  - JavaScript
---

# For Loop Di JavaScript

`for` loop di JavaScript adalah salah satu struktur perulangan (looping) yang mengeksekusi kode secara berulang sampai kondisi tertentu terpenuhi. `for` loop umum digunakan jika jumlah perulangan sudah diketahui. Misalnya:

Ingin mengulang kode sebanyak 5 kali:

```javascript
for (let i = 0; i < 5; i++) {
	console.log(`loop ke - ${i}`)
}

// Hasil output:
// loop ke - 0
// loop ke - 1
// loop ke - 2
// loop ke - 3
// loop ke - 4
```

Penjelasannya:

1. Initialization (Inisialisasi)
   Inisialisasi variabel `i` dan memberikan nilai awal `0`.

> [!question] Pertanyaan
> Apakah bisa selain `i`, dan apa maksud `i`?
>
> Ya, bisa menggunakan nama [[Variabel]] lain. Tapi `i` umum dipakai karena singkat dan mudah dimengerti.
>
> `i` biasanya diartikan sebagai index atau penanda posisi dalam perulangan.

2. Condition (Kondisi)
   Kondisi `i < 5` berarti perulangan akan terus berjalan selama nilai `i` kurang dari `5`.
3. Increment (Penambahan nilai)
   `i++` adalah bentuk singkat dari `i = i + 1`. Ini akan menambah nilai i setiap kali perulangan selesai dieksekusi.

---

> Kalau kamu ingin perulangan dari 1 ke 5, maka i bisa diinisialisasi dari 1 dan kondisinya menjadi i <= 5.

---

Dibuat pada tanggal: Jumat, Juni 13, 2025, 5:44:57 sore
