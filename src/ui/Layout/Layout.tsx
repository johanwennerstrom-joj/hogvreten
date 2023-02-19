import { ReactNode } from 'react'
import fontstring from 'ui/styles/font'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { PrismicProvider } from '@prismicio/react'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<PrismicProvider>
			<main className={fontstring}>
				<Header />
				{children}
				<Footer />
			</main>
		</PrismicProvider>
	)
}

export default Layout
