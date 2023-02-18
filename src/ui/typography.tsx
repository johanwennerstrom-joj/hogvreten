import { PrismicRichTextProps } from '@prismicio/react'

const main: PrismicRichTextProps['components'] = {
	paragraph: ({ children }) => <p className='body'>{children}</p>,
	heading1: ({ children }) => <h1 className='h1'>{children}</h1>,
	heading2: ({ children }) => <h2 className='h2'>{children}</h2>,
	heading3: ({ children }) => <h3 className='h3'>{children}</h3>,
	heading4: ({ children }) => <h4 className='h4'>{children}</h4>,
	heading5: ({ children }) => <h5 className='h5'>{children}</h5>,
	heading6: ({ children }) => <h6 className='h6'>{children}</h6>
}

export { main }
