import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import { HeroSlice } from 'types.generated'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import { isFilled } from '@prismicio/helpers'
import { generateImageBlur } from 'utils/prismic'
import Button from 'components/Button/Button'
import styles from 'styles/custom.module.css'

const Hero = ({ slice }: SliceComponentProps<HeroSlice>) => {
	return (
		<div className='h-[90vh] relative'>
			{isFilled.image(slice.primary.image) ? (
				<Image
					src={slice.primary.image.url}
					alt={slice.primary.image.alt ?? ''}
					fill
					priority
					blurDataURL={generateImageBlur(slice.primary.image) ?? ''}
					placeholder='blur'
					className='object-cover backdrop-blur-sm object-center top-0 left-0 z-0'
					quality={90}
				/>
			) : null}
			<Section css='h-full'>
				<Container css='relative z-10 h-full flex flex-col justify-center'>
					<div>
						<p className='body text-white'>
							<strong className='font-semibold'>Välkommen</strong> till
						</p>
						<PrismicRichText
							field={slice.primary.title}
							components={{
								heading1: ({ children }) => <h1 className='h1 text-white'>{children}</h1>
							}}
						/>
						<div className='md:w-1/2 py-sm'>
							<PrismicRichText
								field={slice.primary.description}
								components={{
									paragraph: ({ children }) => (
										<p className={`body text-white ${styles.tshadow}`}>{children}</p>
									)
								}}
							/>
						</div>
						<Button>Läs mer</Button>
					</div>
				</Container>
			</Section>
		</div>
	)
}

export default Hero
