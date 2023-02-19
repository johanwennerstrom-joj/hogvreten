import { asLink } from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import { NyhetDocument } from 'types.generated'
import formatDate from 'utils/date'
import { linkResolver } from 'utils/prismic'

const NewsThumbnail = ({ doc }: { doc: NyhetDocument }) => {
	return (
		<Link href={asLink(doc, linkResolver) as string} className='hover:opacity-70 cursor-pointer'>
			<time className='label'>{doc.data.date ? formatDate(doc.data.date) : null}</time>
			<p className='h3 py-xs'>{doc.data.header}</p>
			<div className='md:w-2/3'>
				<PrismicRichText
					field={doc.data.preamble}
					components={{ paragraph: ({ children }) => <p className='body'>{children}</p> }}
				/>
			</div>
		</Link>
	)
}
export default NewsThumbnail
