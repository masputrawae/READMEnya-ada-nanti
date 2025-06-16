---
title: Mencegah Refresh Form Submit Di JavaScript
date: 2025-06-13T17:38:38+07:00
update: 2025-06-13T17:38:38+07:00
tags:
  - JavaScript
---

# Mencegah Refresh Form Submit Di JavaScript

Menggunakan `preventDefault()`

```html
<form id="myForm">
	<input type="text" name="nama" />
	<button type="submit">Kirim</button>
</form>

<script>
	document.getElementById('myForm').addEventListener('submit', function (event) {
		event.preventDefault() // Mencegah refresh
		console.log('Form disubmit tanpa refresh')
		// Lakukan aksi lain di sini, seperti fetch/AJAX
	})
</script>
```

---

Dibuat pada tanggal: Jumat, Juni 13, 2025, 5:38:38 sore
