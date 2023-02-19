import ContactForm from 'components/ContactForm/ContactForm'
import ContactGrid from 'components/ContactGrid/ContactGrid'
import { GetStaticProps, NextPage } from 'next'
import { ContactDocument } from 'types.generated'
import { Container, Section } from 'ui/Wrappers/Wrappers'
import { prismicClient } from 'utils/prismic'

const Kontakt: NextPage<ContactDocument> = ({ data }) => {
	return (
		<Section>
			<Container>
				<div className='flex items-center flex-col gap-md'>
					<div className='md:w-[768px]'>
						<h1 className='h1 pb-sm'>Kontakta oss</h1>
						<p className='p'>
							Om du behöver komma i kontakt med oss så kan du fylla i formuläret nedan så svarar
							vi så snart vi kan. Eller kontakta oss via telefon längst ned på sidan
						</p>
					</div>
					<div className='md:w-auto w-full'>
						<ContactForm />
						<ContactGrid data={data} />
					</div>
				</div>
			</Container>
		</Section>
	)
}

export const getStaticProps: GetStaticProps = async ({ previewData = {} }) => {
	const client = prismicClient({ previewData })
	const { data } = await client.getSingle('contact')

	return {
		props: {
			data
		}
	}
}

export default Kontakt
