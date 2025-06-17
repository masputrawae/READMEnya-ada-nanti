import { getCollection } from 'astro:content'

function sortByDate(items) {
	return [...items].sort((a, b) => {
		const dateA = new Date(a.data.date ?? 0).getTime()
		const dateB = new Date(b.data.date ?? 0).getTime()
		return dateB - dateA
	})
}

function filterByType(items, type) {
	if (!type) {
		return [...items].filter((i) => (i.data.type !== 'Projects') & (i.data.type !== 'Permanent'))
	}
	return [...items].filter((i) => i.data.type === type)
}

export async function getContents(show = 'all', type, limit = 2) {
	const getPost = await getCollection('docs')
	const typeFiltered = filterByType(getPost, type)
	if (show === 'all') {
		return sortByDate(typeFiltered)
	}

	if (show === 'featured') {
		const featuredPosts = typeFiltered.filter((i) => i.data.featured)
		return sortByDate(featuredPosts).slice(0, limit)
	}

	return []
}
