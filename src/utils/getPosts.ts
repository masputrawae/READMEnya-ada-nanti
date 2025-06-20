import { getCollection, type CollectionEntry } from 'astro:content'

export async function getAllPosts(
	type: 'Permanent' | 'Notes' | 'Projects' | null = null,
	limit: number | null = null,
	featured: boolean = false
): Promise<CollectionEntry<'vaults'>[]> {
	const allPosts = await getCollection('vaults')

	const filtered = allPosts.filter((post) => {
		if (!type) {
			return post.data.type !== 'Projects'
		}
		return post.data.type === type
	})

	const featuredPost = featured ? filtered.filter((post) => post.data.featured === true) : filtered
	const sorted = featuredPost.sort((a, b) => {
		const dateA = new Date(a.data.date || 0).getTime()
		const dateB = new Date(b.data.date || 0).getTime()
		return dateB - dateA
	})

	return limit ? sorted.slice(0, limit) : sorted
}
