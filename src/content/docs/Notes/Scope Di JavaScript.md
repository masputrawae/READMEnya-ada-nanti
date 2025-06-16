---
title: Scope Di JavaScript
date: 2025-06-12T03:39:39+07:00
update: 2025-06-13T22:43:00
tags:
  - JavaScript
---

# Scope Di JavaScript

Scope atau Cakupan yaitu lingkup dimana [[Variabel]] terlihat atau Cakupan akses sebuah [[Variabel]]

Tipe Scope di JavaScript:

## Global Scope

[[Variabel]] yang dideklarasikan di luar function bisa diakses dari mana saja

```javascript
// Ini global Scope
let nama = 'John'

function sapa() {
	// Bisa diakses di dalam function
	console.log(nama)
}

sapa()
```

## Function Scope

[[Variabel]] yang dideklarasikan di dalam function. [[Variabel]] ini hanya bisa di akses di dalam function tersebut saja, contoh:

```javascript
function sapa() {
	// Variabel di dalam function
	nama = 'John'
	console.log(nama)
}

// Tidak bisa di panggil dari luar, ini akan error
console.log(nama) //error: nama is not defined
```

## Block Scope

diperkenalkan oleh `let` & `const`, [[Variabel]] yang dideklarasikan di dalam blok kurung kurawa `{}`. Contoh:

```javascript
{
	let nama = 'John'
	console.log(nana) // bisa akses
}

// Tidak bisa di akses di luar blok
console.log(nama) //error: nama is not defined
```

> [!WARNING]
> keywoard `var` tidak memiliki block scope, hanya function scope

---

Dibuat pada tanggal: Kamis, Juni 12, 2025, 3:39:39 pagi
