// Mengambil elemen pertama yang cocok dengan selector
export const $ = (selector, scope = document) => scope.querySelector(selector)

// Mengambil semua elemen yang cocok dengan selector (NodeList)
export const $$ = (selector, scope = document) => scope.querySelectorAll(selector)

// Membuat elemen baru dengan tag tertentu
// Contoh penggunaan: const div = createElement('div');
export const createElement = (tag) => document.createElement(tag)

// Menambahkan event listener ke elemen
// Contoh penggunaan: onClick(button, () => alert('Klik!'));
export const onClick = (element, handler) => element.addEventListener('click', handler)

// Menghapus semua child dari sebuah elemen
// Contoh penggunaan: clearChildren(container);
export const clearChildren = (element) => {
	while (element.firstChild) {
		element.removeChild(element.firstChild)
	}
}

// Mengatur teks pada elemen
// Contoh penggunaan: setText(header, 'Halo Dunia');
export const setText = (element, text) => {
	element.textContent = text
}

// ====================== OFFCANVAS ====================== //
;(() => {
	const buttons = $$('[data-offcanvas-target]')

	buttons.forEach((btn) => {
		const getTargetId = btn.getAttribute('data-offcanvas-target')
		const offcanvas = $(`#${getTargetId}`)

		onClick(btn, () => offcanvas.classList.toggle('offcanvasIsActive'))
	})
})()

// ====================== COLLAPSE ====================== //
;(() => {
	const buttons = $$('[data-collapse-target]')
	buttons.forEach((btn) => {
		const getTargetId = btn.getAttribute('data-collapse-target')
		const collapse = $(`#${getTargetId}`)
		const btnCollapse = $(`[data-collapse-target=${getTargetId}] .icon`)

		onClick(btn, () => {
			collapse.classList.toggle('collapseIsActive')
			if (btnCollapse) {
				btnCollapse.classList.toggle('iconIsActive')
			}
		})
	})
})()
