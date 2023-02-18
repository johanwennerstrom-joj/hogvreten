import { prismicClient } from './prismic'

export const getNews = async () => {
	return await prismicClient().getByType('nyhet', {
		orderings: { field: 'my.nyhet.date', direction: 'desc' }
	})
}

export const getSiteSettings = async () => {
	return await prismicClient().getSingle('site_settings')
}
