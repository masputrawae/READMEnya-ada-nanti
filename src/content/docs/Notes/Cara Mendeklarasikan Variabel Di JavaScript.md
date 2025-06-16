---
title: Cara Mendeklarasikan Variabel Di JavaScript
date: 2025-06-14T12:48:44+07:00
update: 2025-06-14T12:48:44+07:00
tags:
  - JavaScript
---

# Cara Mendeklarasikan Variabel Di JavaScript

**Cara Pertama pakai var** (tidak direkomendasikan)

```javascript
var nama = 'John'
var usia = 25
var isActive = true
```

**Cara Kedua pakai let atau const**

```javascript
let nama = 'John'
let usia = 25
let isActive = true
```

Bisa mengganti isi variabel

```javascript
let nama = 'John'

nama = 'Smith'
console.log(nama) // Output: Smith
```

Nilai variabel yang sekiranya tidak boleh berubah gunakan const

```javascript
const nama = 'John'

nama = 'Smith'
console.log(nama) // Output: Error karena variabel yang telah dideklarasikan dengan const tidak bisa di ubah
```

**Terkait**:

- [[Perbedaan const let dan var Di JavaScript]]
- [[Scope Di JavaScript]]
- [[Closure Di JavaScript]]
- [[Tipe Data Di JavaScript]]
- [[Variabel Tanpa Keyword Di JavaScript]]
- [[Menampilkan Output Di JavaScript]]

---

Dibuat pada tanggal: Sabtu, Juni 14, 2025, 12:48:44 siang
