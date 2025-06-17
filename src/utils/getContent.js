import { getCollection } from 'astro:content'

function sortByDate(items) {
	return [...items].sort((a, b) => {
		const dateA = new Date(a.data.date ?? 0).getTime()
		const dateB = new Date(b.data.date ?? 0).getTime()
		return dateB - dateA
	})
}

export async function getContents(show = 'all', collection = 'projects', limit = 2) {
	const getPost = await getCollection(collection)

	if (show === 'all') {
		return sortByDate(getPost)
	}

	if (show === 'featured') {
		const featuredPosts = getPost.filter((i) => i.data.featured)
		return sortByDate(featuredPosts).slice(0, limit)
	}

	return []
}
