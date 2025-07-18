export function modalHandler() {
  const overlay = document.querySelector('.overlay')
  const buttons = document.querySelectorAll('[data-modal]')

  buttons.forEach(btn => {
    const targetId = btn.getAttribute('data-modal')
    const targetEl = document.getElementById(targetId)

    btn.addEventListener('click', () => {
      targetEl.classList.toggle('isOpen')
      overlay.classList.toggle('isActive')
    })

    overlay.addEventListener('click', () => {
      targetEl.classList.remove('isOpen')
      overlay.classList.remove('isActive')
    })
  })
}