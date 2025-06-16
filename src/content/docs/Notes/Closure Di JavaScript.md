---
title: Closure Di JavaScript
date: 2025-06-12T03:58:07+07:00
update: 2025-06-12T03:58:07+07:00
tags:
  - JavaScript
---

# Closure Di JavaScript

Masih sulit menahan Tentang Closure, mungkin contoh - contoh kode berikut bisa membantu memahami secara perlahan:

## Contoh 1

```javascript
function makeFunc() {
	const name = 'Mozilla'
	function displayName() {
		console.log(name)
	}
	return displayName
}

const myFunc = makeFunc()
myFunc()
```

## Contoh 2

```javascript
function makeAdder(x) {
	return function (y) {
		return x + y
	}
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2)) // 7
console.log(add10(2)) // 12
```

## Contoh 3

```javascript
const counter = (function () {
	let privateCounter = 0
	function changeBy(val) {
		privateCounter += val
	}

	return {
		increment() {
			changeBy(1)
		},

		decrement() {
			changeBy(-1)
		},

		value() {
			return privateCounter
		}
	}
})()

console.log(counter.value()) // 0.

counter.increment()
counter.increment()
console.log(counter.value()) // 2.

counter.decrement()
console.log(counter.value()) // 1.
```

---

Dibuat pada tanggal: Kamis, Juni 12, 2025, 3:58:07 pagi
