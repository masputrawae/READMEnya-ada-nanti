// ===== SIDEBAR ===== //
function sidebarAction() {
  const toggleSidebar = document.querySelectorAll('[data-sidebar]')
  toggleSidebar.forEach(e => {
    const targetId = e.getAttribute('data-sidebar')
    console.log(e)
    e.addEventListener('click', () => {
      document.getElementById(targetId).classList.toggle('sidebar--active')
    })
  })
}

sidebarAction()

// ===== SWITCH THEME ===== //
function setTheme() {
  const STORAGE_THEME_KEY = 'storage-theme'

  const btnTheme = document.getElementById('switchTheme')
  const elHTML = document.documentElement

  let storageTheme = localStorage.getItem(STORAGE_THEME_KEY)
  let defaultTheme = elHTML.getAttribute('data-theme')
  
  if(elHTML.getAttribute('data-theme') === null){
    defaultTheme = "dark"
  }

  if (storageTheme === null) {
    localStorage.setItem(STORAGE_THEME_KEY, defaultTheme)
  }

  let currentTheme = (storageTheme === null) ? defaultTheme : storageTheme

  elHTML.setAttribute('data-theme', currentTheme)

  btnTheme.addEventListener("click", ()=>{
    let initTheme = elHTML.getAttribute('data-theme')
    let changeTheme = (initTheme === "dark") ? "light" : (initTheme === "light" ? "dark" : initTheme)

    elHTML.setAttribute('data-theme', changeTheme)
    localStorage.setItem(STORAGE_THEME_KEY, changeTheme)
  })
}

setTheme()