import fs from 'fs/promises'

import { createClient } from '@prismicio/client'

export const prismicClient = (config = {}) => {
	const client = createClient('hogvreten', {
		...config
	})
	return client
}

const staticGen = async () => {
	const res = await prismicClient().getSingle('site_settings')
	await fs.writeFile('public/generated/static.json', JSON.stringify(res))
}

staticGen()
