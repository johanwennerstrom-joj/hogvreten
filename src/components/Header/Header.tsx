import { asLink } from '@prismicio/helpers'
import useSiteSettings from 'hooks/useSiteSettings'
import Link from 'next/link'
import { Container } from 'ui/Wrappers/Wrappers'
import { linkResolver } from 'utils/prismic'

const Header = () => {
	const { settings, isLoading, error } = useSiteSettings()
	return (
		<header className='bg-gray-700 sticky top-0 z-50 md:block hidden'>
			<Container>
				<nav className='flex justify-between py-md'>
					<span className='font-inter text-body text-white tracking-wider font-normal uppercase'>
						Brf Högvreten
					</span>
					<ul className='text-white flex gap-sm font-inter text-nav font-light links'>
						{!isLoading && !error
							? settings?.data.menu.map((item) => {
									return (
										<li key={item.link_text}>
											<Link href={asLink(item.link, linkResolver) as string}>
												{item.link_text}
											</Link>
										</li>
									)
							  })
							: null}
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default Header
