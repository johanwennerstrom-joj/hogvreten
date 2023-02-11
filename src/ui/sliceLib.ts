import dynamic from 'next/dynamic'

const sliceLib = {
	hero: dynamic(() => import('components/Hero/Hero'))
}

export default sliceLib
