export function sortPost(items, option = 'newPosts', limit = 5) {
	if (option === 'newPosts') {
		return [...items]
			.sort((a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime())
			.slice(0, limit)
	}

	if (option === 'lastUpdate') {
		return [...items]
			.sort(
				(a, b) => new Date(b.data.update || 0).getTime() - new Date(a.data.update || 0).getTime()
			)
			.slice(0, limit)
	}

	return []
}
