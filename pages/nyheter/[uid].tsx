import { SliceZone } from '@prismicio/react'
import NewsIntro from 'components/NewsIntro/NewsIntro'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NyhetDocument } from 'types.generated'
import sliceLib from 'ui/sliceLib'
import { prismicClient } from 'utils/prismic'

const Home: NextPage<NyhetDocument> = ({ data }) => {
	return (
		<>
			<NewsIntro data={data} />
			<SliceZone slices={data.slices} components={sliceLib} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ previewData = {}, params }) => {
	const client = prismicClient({ previewData })
	const { data } = await client.getByUID('nyhet', params?.uid as string)

	return {
		props: {
			data
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const documents = await prismicClient().getAllByType('nyhet')

	return {
		paths: documents.map((doc) => ({
			params: { uid: doc.uid }
		})),
		fallback: false
	}
}

export default Home
