export function tocHandler() {
  const header = document.querySelector('header')
  const OFFSET = header?.offsetHeight + 20 || 80

  const tocLinks = document.querySelectorAll('#TableOfContents a')
  const headings = Array.from(tocLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  function onScroll() {
    let activeIndex = -1
    headings.forEach((heading, index) => {
      const rect = heading.getBoundingClientRect()
      if (rect.top <= OFFSET) {
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
