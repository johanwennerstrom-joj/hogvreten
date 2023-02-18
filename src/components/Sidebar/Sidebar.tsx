import { PrismicRichText } from '@prismicio/react'
import Spinner from 'components/Spinner/Spinner'
import useSiteSettings from 'hooks/useSiteSettings'
import { main } from 'ui/typography'

const Sidebar = () => {
	const { settings, isLoading, error } = useSiteSettings()
	if (error) return null
	return (
		<div className='col-span-3 flex flex-col gap-sm'>
			{isLoading ? (
				<Spinner />
			) : (
				<PrismicRichText field={settings?.data.information} components={main} />
			)}
		</div>
	)
}

export default Sidebar
