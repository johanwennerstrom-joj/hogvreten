import NewsThumbnail from 'components/NewsThumbnail/NewsThumbnail'
import { GetStaticProps, NextPage } from 'next'
import { NyheterDocument } from 'types.generated'
import sliceLib from 'ui/sliceLib'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import { prismicClient } from 'utils/prismic'
import { SliceZone } from '@prismicio/react'
import useSWR from 'swr'
import { getPaginatedNews } from 'utils/fetchers'
import { useState } from 'react'
import Spinner from 'components/Spinner/Spinner'
import { Arrow } from 'ui/icons'

const News: NextPage<{ data: NyheterDocument['data'] }> = ({ data }) => {
	const [page, setPage] = useState(1)
	const {
		data: articles,
		error,
		isLoading
	} = useSWR(`/archive?page=${page}`, () => getPaginatedNews(page), { suspense: false })

	const paginateUp = async () => {
		if (!articles?.total_pages || isLoading) return
		setPage((prevPage) => (prevPage < articles?.total_pages ? prevPage + 1 : prevPage))
	}

	const paginateDown = async () => {
		if (!articles?.total_pages || isLoading) return
		setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))
	}
	return (
		<>
			<SliceZone slices={data.slices} components={sliceLib} />
			<Section>
				<Container>
					<div>
						<h2 className='h2'>Arkiv</h2>
					</div>
					<div className='flex flex-col gap-md py-md pr-lg'>
						{isLoading ? <Spinner /> : null}
						{!error &&
							articles?.results.map((result) => {
								return <NewsThumbnail doc={result} key={result.id} />
							})}
					</div>
					<div className='flex items-center gap-xl py-md'>
						<p className='p'>
							Sida: {page} / {articles?.total_pages}
						</p>
						<div className='flex gap-md'>
							<Arrow
								overrideSize={{ height: 16, width: 16 }}
								onClick={paginateDown}
								direction='rotate'
							/>
							<Arrow
								overrideSize={{ height: 16, width: 16 }}
								onClick={paginateUp}
								direction='default'
							/>
						</div>
					</div>
				</Container>
			</Section>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
	const client = prismicClient({ previewData })

	const { data } = await client.getSingle('nyheter')

	return {
		props: {
			data
		}
	}
}

export default News
