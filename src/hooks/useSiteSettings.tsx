import useSwr from 'swr'
import { getSiteSettings } from 'utils/fetchers'

const useSiteSettings = () => {
	const { data: settings, isLoading, error } = useSwr('/api/sitesettings', getSiteSettings)

	return { settings, isLoading, error }
}
export default useSiteSettings
