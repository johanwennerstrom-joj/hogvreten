import { SliceZone } from '@prismicio/react'
import { GetStaticProps, NextPage } from 'next'
import { DokumentDocument } from 'types.generated'
import sliceLib from 'ui/sliceLib'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import { prismicClient } from 'utils/prismic'

const Documents: NextPage<DokumentDocument> = ({ data }) => {
	return (
		<Section>
			<Container>
				<h1 className='h1'>Dokument</h1>
				<div className='md:grid grid-cols-4 gap-md'>
					<SliceZone slices={data.slices} components={sliceLib} />
				</div>
			</Container>
		</Section>
	)
}

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
	const client = prismicClient({ previewData })
	const { data } = await client.getSingle('dokument')

	return {
		props: { data }
	}
}

export default Documents
