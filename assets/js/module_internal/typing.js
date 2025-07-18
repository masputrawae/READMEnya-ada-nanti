// TYPING
export function typingHandler() {
  function startTypingEffect(
    element,
    texts,
    typingSpeed = 150,
    deletingSpeed = 50,
    delay = 1000
  ) {
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    function type() {
      const currentText = texts[textIndex]

      if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1)
        charIndex++

        if (charIndex === currentText.length) {
          isDeleting = true
          setTimeout(type, delay)
          return
        }
      } else {
        element.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
        if (charIndex === 1) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length // next text
        }
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
    }
    type()
  }

  document.querySelectorAll('.typewriter').forEach(el => {
    const texts = JSON.parse(el.getAttribute('data-texts'))
    startTypingEffect(el, texts)
  })
}