import { PrismicRichText } from '@prismicio/react'
import { GetStaticProps, NextPage } from 'next'
import { AboutDocument } from 'types.generated'
import { main } from 'ui/typography'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import { prismicClient } from 'utils/prismic'

const About: NextPage<AboutDocument> = ({ data }) => {
	return (
		<Section>
			<Container css='md:grid grid-cols-2 gap-md'>
				<div className='col-start-1 col-span-2'>
					<h1 className='h1'>Om oss</h1>
				</div>
				<div className='col-start-1 col-span-1'>
					<PrismicRichText components={main} field={data.section_left} />
				</div>
				<div className='col-start-2 col-span-1'>
					<PrismicRichText components={main} field={data.section} />
				</div>
			</Container>
		</Section>
	)
}

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
	const client = prismicClient({ previewData })
	const { data } = await client.getSingle('about')

	return {
		props: {
			data
		}
	}
}

export default About
