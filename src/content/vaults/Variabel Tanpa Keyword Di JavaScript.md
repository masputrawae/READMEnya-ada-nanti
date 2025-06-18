---
title: Variabel Tanpa Keyword Di JavaScript
date: 2025-06-12T04:08:04+07:00
update: 2025-06-12T04:08:04+07:00
tags:
  - JavaScript
---

# Variabel Tanpa Keyword Di JavaScript

Jika lupa nulis var, let atau const, maka **JavaScript** tetap membuat [[Variabel]]-nya tapi langsung di global object (`window` di browser, `global` di Node.js)

**Contoh**:

```javascript
// Kasus khusus tanpa keyword akan jadi var
z = 10 // Ini otomatis jadi global variable (seolah var z = 10 di global scope)
{
	z = 20
}
console.log(z)
```

Ini sangat **tidak disarankan**, karena bisa:

- Nge-replace [[Variabel]] lain tanpa sengaja.
- Sulit dilacak bug-nya.

Di mode `"strict"`, ini akan menghasilkan **error**.

```javascript
'use strict'
z = 10 // ❌ Error: z is not defined
```

**Terkait**:

- [[Strict Mode Di JavaScript]]

---

Dibuat pada tanggal: Kamis, Juni 12, 2025, 4:08:04 pagi
