import { SliceComponentProps } from '@prismicio/react'
import { NyheterSlice } from 'types.generated'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import useSWR from 'swr'
import { getNews } from 'utils/fetchers'
import NewsThumbnail from 'components/NewsThumbnail/NewsThumbnail'
import Spinner from 'components/Spinner/Spinner'
import Link from 'next/link'
import Sidebar from 'components/Sidebar/Sidebar'

const News = ({ slice }: SliceComponentProps<NyheterSlice>) => {
	const { data, isLoading, error } = useSWR('/api/news', getNews)
	if (error) return null
	return (
		<Section>
			<Container css='flex flex-col md:grid grid-cols-12 gap-y-lg md:gap-y-[0px] gap-x-[94px]'>
				<div className='col-start-1 col-span-7'>
					<div className='flex md:flex-row flex-col-reverse justify-between md:items-center'>
						<h2 className='h2'>{slice.primary.title}</h2>
						<Link href='/arkiv' className='text-yellow body'>
							ARKIV
						</Link>
					</div>
					<div className='pt-md flex flex-col gap-y-lg'>
						{isLoading ? (
							<Spinner />
						) : (
							data?.results.map((news) => <NewsThumbnail key={news.id} data={news.data} />)
						)}
					</div>
				</div>
				<Sidebar />
			</Container>
		</Section>
	)
}

export default News
