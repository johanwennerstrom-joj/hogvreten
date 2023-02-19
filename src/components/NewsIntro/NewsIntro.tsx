import { PrismicRichText } from '@prismicio/react'
import { NyhetDocument } from 'types.generated'
import { preambleMain } from 'ui/typography'
import { Container } from 'ui/Wrappers/Wrappers'
import formatDate from 'utils/date'

interface INewsIntroProps {
	data: Pick<NyhetDocument['data'], 'date' | 'header' | 'preamble'>
}

const NewsIntro = ({ data }: INewsIntroProps) => {
	return (
		<section className='pb-md pt-xl'>
			<Container css='md:grid grid-cols-2 gap-md'>
				<div className='col-span-1'>
					<time>{formatDate(data.date)}</time>
					<h1 className='h1'>{data.header}</h1>
					<div className='pt-md'>
						<PrismicRichText field={data.preamble} components={preambleMain} />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default NewsIntro
