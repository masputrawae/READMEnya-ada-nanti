// ====================== // src/utils.js

// ====================== // Get Posts
import { getCollection } from 'astro:content'
export async function getPosts(type, featured = false, limit) {
	const items = await getCollection('vaults')
	let filtered = items
	if (type) {
		filtered = filtered.filter((i) => i.data.type === type)
	} else {
		filtered = filtered.filter((i) => i.data.type !== 'Projects')
	}
	if (!featured) {
		return filtered
			.sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0))
			.slice(0, limit)
	}
	return filtered
		.filter((i) => i.data.featured)
		.sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0))
		.slice(0, limit)
}

// ====================== // Capitalize Each Word
export function capitalizeEachWord(text) {
	return text
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

// ====================== // Time Format
export function timeFormat(dateInput, longDate) {
	const date = new Date(dateInput)
	const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
	const bulan = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	]

	const namaHari = hari[date.getDay()]
	const tanggal = date.getDate()
	const namaBulan = bulan[date.getMonth()]
	const tahun = date.getFullYear()

	let jam = date.getHours()
	const menit = date.getMinutes().toString().padStart(2, '0')

	const ampm = jam >= 12 ? 'PM' : 'AM'
	jam = jam % 12
	jam = jam ? jam : 12

	let setDate

	longDate
		? (setDate = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}  - Jam ${jam}:${menit} ${ampm}`)
		: (setDate = `${tanggal} ${namaBulan} ${tahun}`)

	return setDate
}
