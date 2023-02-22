import { ReactNode } from 'react'
import fontstring from 'ui/styles/font'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { PrismicProvider } from '@prismicio/react'
import Head from 'next/head'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Head>
				<title>Brf Högvreten</title>
			</Head>
			<PrismicProvider>
				<main className={fontstring}>
					<Header />
					{children}
					<Footer />
				</main>
			</PrismicProvider>
		</>
	)
}

export default Layout
