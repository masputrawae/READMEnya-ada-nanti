const elHtml = document.documentElement
const overlay = document.querySelector('.overlay')

// SWITCH THEME HANDLER
function themeHandler() {
  const KEY_THEME = 'THEME'
  const buttons = document.querySelectorAll('[data-btn-theme]')

  function setTheme(theme) {
    elHtml.dataset.theme = theme
    sessionStorage.setItem(KEY_THEME, theme)

    buttons.forEach(btn => {
      if (theme === 'dark') {
        btn.classList.add('darkIsActive')
      } else {
        btn.classList.remove('darkIsActive')
      }
    })
  }

  function initTheme() {
    const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    const storageTheme = sessionStorage.getItem(KEY_THEME)
    setTheme(storageTheme ? storageTheme : isDarkSystem)
  }

  function toggleTheme() {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const storageTheme = sessionStorage.getItem(KEY_THEME)
        const newTheme = storageTheme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
      })
    })
  }

  initTheme()
  toggleTheme()
}

// SIDEBAR HANDLER
function modalHandler() {
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

// TYPING
function typingHandler() {
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

// TREE COLLAPSIBLE
function treeHandler() {
  const TREE_KEY = 'TREE'
  const folderButtons = document.querySelectorAll('[data-folder-target]')

  function initTree() {
    const treeState = JSON.parse(sessionStorage.getItem(TREE_KEY)) || {}

    folderButtons.forEach(button => {
      const targetId = button.getAttribute('data-folder-target')
      const targetEl = document.getElementById(targetId)

      // Apply saved state
      if (treeState[targetId]) {
        targetEl.classList.add('tree__children--isOpen')
        button.classList.add('tree__btn--isOpen')
      } else {
        targetEl.classList.remove('tree__children--isOpen')
        button.classList.remove('tree__btn--isOpen')
      }
    })
  }

  function treeCollapse() {
    folderButtons.forEach(button => {
      const targetId = button.getAttribute('data-folder-target')
      const targetEl = document.getElementById(targetId)

      button.addEventListener('click', () => {
        const treeState = JSON.parse(sessionStorage.getItem(TREE_KEY)) || {}

        targetEl.classList.toggle('tree__children--isOpen')
        button.classList.toggle('tree__btn--isOpen')

        const isOpen = targetEl.classList.contains('tree__children--isOpen')
        treeState[targetId] = isOpen

        sessionStorage.setItem(TREE_KEY, JSON.stringify(treeState))
      })
    })
  }

  initTree()
  treeCollapse()
}

// TOC HIGHLIGHT
function tocHandler() {
  const tocLinks = document.querySelectorAll('#TableOfContents a')
  const headings = Array.from(tocLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  function onScroll() {
    let activeIndex = -1
    headings.forEach((heading, index) => {
      const rect = heading.getBoundingClientRect()
      if (rect.top <= 64 + 20) {
        // adjust offset as needed
        activeIndex = index
      }
    })

    tocLinks.forEach(link => link.classList.remove('isActive'))
    if (activeIndex >= 0) {
      tocLinks[activeIndex].classList.add('isActive')
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

function main() {
  themeHandler()
  modalHandler()
  typingHandler()
  treeHandler()
  tocHandler()
}

document.addEventListener('DOMContentLoaded', main)