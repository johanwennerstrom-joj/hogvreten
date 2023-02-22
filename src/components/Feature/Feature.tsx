import { asText, isFilled } from '@prismicio/helpers'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import { BildTextSlice } from 'types.generated'
import { main } from 'ui/typography'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import { generateImageBlur } from 'utils/prismic'

const Feature = ({ slice }: SliceComponentProps<BildTextSlice>) => {
	return (
		<Section css='bg-gray-50'>
			<Container css='md:grid grid-cols-2 gap-md'>
				<div className='pr-md'>
					<h1 className='h1 py-sm'>{asText(slice.primary.title)}</h1>
					<PrismicRichText field={slice.primary.description} components={main} />
				</div>
				{isFilled.image(slice.primary.image) ? (
					<div className='relative pb-[56.25%]'>
						<Image
							src={slice.primary.image.url}
							alt={slice.primary.image.alt ?? ''}
							fill
							className=' object-cover object-center'
							placeholder='blur'
							blurDataURL={generateImageBlur(slice.primary.image) as string}
						/>
					</div>
				) : null}
			</Container>
		</Section>
	)
}

export default Feature
