---
title: Fungsi Slice Di JavaScript
date: 2025-06-15T14:42:53+07:00
update: 2025-06-15T14:42:53+07:00
tags:
  - JavaScript
---

# Fungsi Slice Di JavaScript

Fungsi `slice()` di JavaScript digunakan untuk mengambil sebagian elemen dari sebuah array tanpa mengubah array aslinya. Fungsi ini menerima dua parameter: **indeks awal** dan **indeks akhir (tidak termasuk)**.

```javascript
array.slice(start, end)
```

start: indeks awal (dimasukkan)
end: indeks akhir (tidak dimasukkan)

**contoh**:
**Ambil dari indeks 0 sampai sebelum 3**:

```javascript
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.slice(0, 3)
console.log(newArr) // Output: [1, 2, 3] !❌ 4 tidak termasuk
```

**Ambil dari indeks 2 sampai sebelum 5**:

```javascript
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.slice(2, 5)
console.log(newArr) // Output: [3, 4, 5] !❌ 6 tidak termasuk
```

---

Dibuat pada tanggal: Minggu, Juni 15, 2025, 2:42:53 siang
