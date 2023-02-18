import dynamic from 'next/dynamic'

const sliceLib = {
	hero: dynamic(() => import('components/Hero/Hero')),
	nyheter: dynamic(() => import('components/News/News'))
}

export default sliceLib
