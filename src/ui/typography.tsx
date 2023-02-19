import { PrismicRichTextProps } from '@prismicio/react'
import Image from 'next/image'
import { generateImageBlur } from 'utils/prismic'

const main: PrismicRichTextProps['components'] = {
	paragraph: ({ children }) => <p className='body'>{children}</p>,
	heading1: ({ children }) => <h1 className='h1'>{children}</h1>,
	heading2: ({ children }) => <h2 className='h2'>{children}</h2>,
	heading3: ({ children }) => <h3 className='h3'>{children}</h3>,
	heading4: ({ children }) => <h4 className='h4'>{children}</h4>,
	heading5: ({ children }) => <h5 className='h5'>{children}</h5>,
	heading6: ({ children }) => <h6 className='h6'>{children}</h6>,
	list: ({ children }) => <ul className='list-inside list-disc'>{children}</ul>,
	oList: ({ children }) => <ol className='list-inside list-decimal'>{children}</ol>,
	listItem: ({ children }) => <li className='p'>{children}</li>,
	image: ({ node }) => (
		<div className='relative pb-[56.25%]'>
			<Image
				src={node.url}
				alt={node.alt ?? ''}
				fill
				placeholder='blur'
				className='object-cover object-center top-0 left-0'
				blurDataURL={generateImageBlur(node) as string}
			/>
		</div>
	)
}

const preambleMain: PrismicRichTextProps['components'] = {
	paragraph: ({ children }) => (
		<p className='text-h3 leading-body font-inter font-light text-gray-900'>{children}</p>
	),
	heading1: ({ children }) => <h1 className='h1'>{children}</h1>,
	heading2: ({ children }) => <h2 className='h2'>{children}</h2>,
	heading3: ({ children }) => <h3 className='h3'>{children}</h3>,
	heading4: ({ children }) => <h4 className='h4'>{children}</h4>,
	heading5: ({ children }) => <h5 className='h5'>{children}</h5>,
	heading6: ({ children }) => <h6 className='h6'>{children}</h6>,
	image: ({ node }) => (
		<div className='relative pb-[56.25%]'>
			<Image
				src={node.url}
				alt={node.alt ?? ''}
				fill
				placeholder='blur'
				className='object-cover object-center top-0 left-0'
				blurDataURL={generateImageBlur(node) as string}
			/>
		</div>
	)
}

export { main, preambleMain }
