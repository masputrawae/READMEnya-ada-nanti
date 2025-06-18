---
title: Mengambil Input Di Python
date: 2025-06-12T11:46:14+07:00
update: 2025-06-16T20:12:00
tags:
  - JavaScript
---

# Mengambil Input Di Python

Menggunakan `input()` untuk mengambil input dari penggunaan.

```python
nama = input("Masukkan Nama: ")
print(f"Hallo {nama}")
```

> Nilai yang dikembalikan dari `input()` akan selalu string, jika ingin mengembalikan dalam bentuk integer atau float harus dikonversi dulu seperti berikut ini

```python
angka = int(input("Masukkan angka: "))
print(type(angka)) # <class 'int'>
```

**Terkait**:

- [[Casting Tipe Data Di Python]]

---

Dibuat pada tanggal: Kamis, Juni 12, 2025, 11:46:14 siang
