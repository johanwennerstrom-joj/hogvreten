import { ClientConfig, createClient } from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { GetStaticPropsContext } from 'next'
import { RequestContext } from 'next/dist/server/base-server'
import { asImageSrc, LinkResolverFunction } from '@prismicio/helpers'
import { ImageFieldImage } from '@prismicio/types'

interface IConfig extends ClientConfig {
	previewData: GetStaticPropsContext['previewData']
	req?: RequestContext
}

export const prismicClient = (config = {} as IConfig) => {
	const client = createClient('hogvreten', {
		...config
	})

	enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req
	})
	return client
}

export const generateImageBlur = (image: ImageFieldImage) => {
	return asImageSrc(image, { blur: 460, px: 21 })
}

export const linkResolver: LinkResolverFunction = (doc) => {
	switch (doc.type) {
		case 'nyhet':
			return `/nyheter/${doc.uid}`
		case 'contact':
			return '/kontakt'
		case 'about':
			return '/om-oss'
		default:
			return '/'
	}
}
