import { PrismicRichText } from '@prismicio/react'
import { ContactDocument } from 'types.generated'

interface IContactGridProps {
	data: ContactDocument['data']
}

const ContactGrid = ({ data }: IContactGridProps) => {
	return (
		<div className='grid grid-cols-4 gap-sm pt-lg'>
			{data.kontakt.map((item, index) => {
				return <PrismicRichText field={item.contact_block} key={index} />
			})}
		</div>
	)
}

export default ContactGrid
