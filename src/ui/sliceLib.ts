import dynamic from 'next/dynamic'
import { SliceZoneProps } from '@prismicio/react'

const sliceLib: SliceZoneProps['components'] = {
	hero: dynamic(() => import('components/Hero/Hero')),
	nyheter: dynamic(() => import('components/News/News')),
	text_block: dynamic(() => import('components/TextBlock/TextBlock'))
}

export default sliceLib
