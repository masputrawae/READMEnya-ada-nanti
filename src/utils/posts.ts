// src/utils/posts.ts

interface GetPosts {
	type: string | 'Projects' | 'Notes' | 'Series' | 'All' | 'NotProjects'
	limit?: number
	featured?: boolean
}

import { getCollection } from 'astro:content'

// SORTED BY DATE
export function sortByDate(items: any) {
	return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

// SORTED BY FEATURED
export function sortByFeatured(items: any) {
	return [...items].sort((a, b) =>
		a.data.featured === b.data.featured ? 0 : a.data.featured ? -1 : 1
	)
}

// GET POST
export async function getPosts(val: GetPosts) {
	const allPosts = await getCollection('vault')
	let posts
	if (!val.type || val.type === 'All') {
		posts = allPosts
	} else if (val.type === 'NotProjects') {
		posts = allPosts.filter((i) => i.data.type != 'Projects')
	} else {
		posts = allPosts.filter((i) => i.data.type === val.type)
	}
	const featured = val.featured ? posts.filter((i) => i.data.featured) : posts
	const limited = val.limit ? featured.slice(0, val.limit) : featured
	return limited
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
		.sort((a, b) => (a.data.featured === b.data.featured ? 0 : a.data.featured ? -1 : 1))
}

// TIME FORMAT
export function timeFormat(dateInput: string, longDate: boolean) {
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
