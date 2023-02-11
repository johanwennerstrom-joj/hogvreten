import { ReactNode } from 'react'
import fontstring from 'ui/styles/font'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className={fontstring}>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
