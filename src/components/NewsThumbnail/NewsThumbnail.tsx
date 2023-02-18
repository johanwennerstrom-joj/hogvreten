import { PrismicRichText } from '@prismicio/react'
import { NyhetDocument } from 'types.generated'
import formatDate from 'utils/date'

const NewsThumbnail = ({ data }: { data: NyhetDocument['data'] }) => {
	return (
		<div className='hover:opacity-70 cursor-pointer'>
			<time className='label'>{data.date ? formatDate(data.date) : null}</time>
			<p className='h3 py-xs'>{data.header}</p>
			<div className='md:w-2/3'>
				<PrismicRichText
					field={data.preamble}
					components={{ paragraph: ({ children }) => <p className='body'>{children}</p> }}
				/>
			</div>
		</div>
	)
}
export default NewsThumbnail
