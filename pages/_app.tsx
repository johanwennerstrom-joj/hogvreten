import 'ui/styles/global.css'
import Layout from 'ui/Layout/Layout'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fallback: {
					'/api/sitesettings': () => import('public/generated/static.json')
				}
			}}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	)
}
