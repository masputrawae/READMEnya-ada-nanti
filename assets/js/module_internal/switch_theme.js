// SWITCH THEME HANDLER
export function themeHandler() {
  const elHtml = document.documentElement
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