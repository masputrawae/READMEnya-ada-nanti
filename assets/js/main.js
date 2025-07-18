import { themeHandler } from './module_internal/switch_theme'
import { modalHandler } from './module_internal/modal'
import { typingHandler } from './module_internal/typing'
import { treeHandler } from './module_internal/collapsible_tree'
import { tocHandler } from './module_internal/toc_highlight'
import { searchHandler } from './module_internal/search'

function main() {
  themeHandler()
  modalHandler()
  typingHandler()
  treeHandler()
  tocHandler()
  searchHandler()
}

document.addEventListener('DOMContentLoaded', main)
