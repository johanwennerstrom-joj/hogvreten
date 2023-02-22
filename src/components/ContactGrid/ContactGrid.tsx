import { asText } from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { ContactDocument } from 'types.generated'

interface IContactGridProps {
	data: ContactDocument['data']
}

const ContactGrid = ({ data }: IContactGridProps) => {
	return (
		<div className='grid grid-cols-4 gap-sm pt-lg'>
			{data.kontakt.map((item) => {
				return (
					<div key={asText(item.contact_block)}>
						<PrismicRichText field={item.contact_block} />{' '}
					</div>
				)
			})}
		</div>
	)
}

export default ContactGrid
