---
title: Strict Mode Di JavaScript
date: 2025-06-12T11:55:18+07:00
update: 2025-06-12T11:55:18+07:00
tags:
  - JavaScript
---

# Strict Mode Di JavaScript

Mode `"use strict"` di JavaScript adalah sebuah fitur yang membuat aturan kode javascript lebih ketat. Kalau di mode biasa JavaScript akan lebih toleran atau aturan lebih longgar terhadap kode, misalnya [[Variabel Tanpa Keyword Di JavaScript]] kalau tidak dalam mode `"use strict"` maka tidak akan error, tapi jika pakai mode `"use strict"`, maka akan muncul error.

## Cara mengaktifkan

Taruh di awal kode:

```javascript
'use strict'
```

Misalnya:

```javascript
'use strict'
x = 10 // ERROR: x is not defined
```

Jika tanpa mode Strict:

```javascript
x = 5 // Tidak error walaupun kamu tidak deklarasikan `x`
```

---

> [!INFO]
> Kalau kamu pakai module (`type="module"` di HTML atau file `.mjs`), JavaScript otomatis dalam mode strict—tanpa perlu `"use strict"` lagi.

---

Dibuat pada tanggal: Kamis, Juni 12, 2025, 11:55:18 siang
