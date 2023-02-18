import { DateField } from '@prismicio/types'
import format from 'date-fns/format'
import sv from 'date-fns/locale/sv'

const formatDate = (dateString: DateField) => {
	return format(new Date(dateString as string), 'd MMMM yyyy', {
		locale: sv
	})
}
export default formatDate
