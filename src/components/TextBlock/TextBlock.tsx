import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { TextBlockSlice } from 'types.generated'
import { main } from 'ui/typography'
import { Container } from 'ui/Wrappers/Wrappers'

const TextBlock = ({ slice }: SliceComponentProps<TextBlockSlice>) => {
	return (
		<section className='pb-lg md:grid grid-cols-7 gap-md'>
			<Container css='col-span-4'>
				<PrismicRichText field={slice.primary.text} components={main} />
			</Container>
		</section>
	)
}

export default TextBlock
