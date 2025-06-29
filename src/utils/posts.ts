// src/utils/posts.ts

interface GetPosts {
	type: string | 'Projects' | 'Notes' | 'Series' | 'All' | 'NotProjects'
	limit?: number
	featured?: boolean
}

import { getCollection } from 'astro:content'

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
	return val.limit ? featured.slice(0, val.limit) : featured
}

// SORTED BY DATE
export function sortByDate(items:any) {
	return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

// SORTED BY FEATURED
export function sortByFeatured(items:any) {
	return [...items].sort((a, b) =>
		a.data.featured === b.data.featured ? 0 : a.data.featured ? -1 : 1
	)
}
