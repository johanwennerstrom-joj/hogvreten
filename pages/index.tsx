import { SliceZone } from '@prismicio/react'
import { GetStaticProps, NextPage } from 'next'
import { StartDocument } from 'types.generated'
import sliceLib from 'ui/sliceLib'
import { prismicClient } from 'utils/prismic'

const Home: NextPage<StartDocument> = ({ data }) => {
	return <SliceZone slices={data.slices} components={sliceLib} />
}

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
	const client = prismicClient({ previewData })
	const { data } = await client.getSingle('start')

	return {
		props: {
			data
		}
	}
}

export default Home
