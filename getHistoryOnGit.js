import { execSync } from 'child_process'
import fs from 'fs'
import fg from 'fast-glob'
import path from 'path'

function getFullHistoryMap() {
  const output = execSync(
    `git log --max-count=100 --pretty=format:"%h|%at|%s" --name-only -- ./src/content/docs/`,
    { encoding: 'utf-8' }
  )

  const map = {}
  const lines = output.split('\n')
  let currentCommit = null

  for (const line of lines) {
    if (!line.trim()) continue
    if (line.includes('|')) {
      const [hash, timestamp, message] = line.split('|')
      currentCommit = {
        hash,
        date: new Date(Number(timestamp) * 1000).toISOString(),
        message,
      }
    } else if (currentCommit) {
      const file = line.trim()
      if (!map[file]) map[file] = []
      map[file].push(currentCommit)
    }
  }

  // cari semua file markdown di docs
  const mdFiles = fg.sync('./src/content/docs/**/*.md')

  // untuk setiap file, baca konten & tambahkan ke history
  for (const file of mdFiles) {
    const rawMarkdown = fs.readFileSync(file, 'utf-8')
    const relativePath = path.relative('.', file) // biar match key di map
    if (map[relativePath]) {
      map[relativePath] = map[relativePath].map(item => ({
        ...item,
        rawMarkdown
      }))
    }
  }

  return map
}

const map = getFullHistoryMap()
fs.writeFileSync('./src/data/historyMap.json', JSON.stringify(map, null, 2))
console.log(`✅ History map generated: ${Object.keys(map).length} files`)
