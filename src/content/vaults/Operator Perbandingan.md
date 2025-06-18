---
title: Operator Perbandingan
date: 2025-06-11T11:59:55+07:00
update: 2025-06-11T11:59:55+07:00
tags:
  - JavaScript
  - PHP
  - Python
---

# Operator Perbandingan

Operator perbandingan adalah sebuah operasi yang akan membandingkan nilai dengan nilai lain yang ingin dibandingkan, contoh apakah 5 lebih besar dari 3?, ini nantinya akan menghasilkan nilai Boolean jika benar maka akan menghasilkan nilai True, jika tidak maka false.

Berikut adalah tabel perbandingan dalam bahasa pemrograman JavaScript , PHP, dan Python:

## Tabel Operator Perbandingan

| Makna                        | JavaScript      | PHP            | Python             |
| ---------------------------- | --------------- | -------------- | ------------------ |
| Sama dengan                  | `==`            | `==`           | `==`               |
| Sama dan tipe sama           | `===`           | `===`          | == + type() manual |
| Tidak sama dengan            | `!=` atau `!==` | `!=` atau `<>` | `!=` atau `<>`     |
| Tidak sama & tipe beda       | `!==`           |                | `!==`              |
| Lebih besar                  | `>`             | `>`            | `>`                |
| Lebih kecil                  | `<`             | `<`            | `<`                |
| Lebih besar atau sama        | `>=`            | `>=`           | `>=`               |
| Lebih kecil atau sama dengan | `<=`            | `<=`           | `<=`               |
| Identitas (objek sama)       |                 |                | `is`               |
| Bukan identitas objek        |                 |                | `is not`           |

## Penjelasan Tambahan

### JavaScript

`==` membandingkan nilai saja (bisa auto-convert tipe data).

```javascript
'5' == 5 // true
```

`===` membandingkan nilai dan tipe data.

```javascript
'5' === 5 // false
```

### Python

Tidak punya `===`. Untuk Tipe Data, bisa dicek dengan `type()`.

```python
type('5') == type(5)  # False
```

is mengecek apakah dua [[Variabel]] merujuk ke objek yang sama di memori.

```python
a = [1,2]
b = a
a is b  # True
```

### PHP

Sama seperti JavaScript, `==` membandingkan nilai saja, `===` membandingkan nilai dan Tipe Data .

```php
'5' == 5  // true
'5' === 5 // false
```

---

Dibuat pada tanggal: Rabu, Juni 11, 2025, 11:59:55 siang
