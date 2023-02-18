import { Container } from 'ui/Wrappers/Wrappers'

const Header = () => {
	return (
		<header className='bg-gray-700 sticky top-0 z-50 md:block hidden'>
			<Container>
				<nav className='flex justify-between py-md'>
					<span className='font-inter text-body text-white tracking-wider font-normal uppercase'>
						Brf Högvreten
					</span>
					<ul className='text-white flex gap-sm font-inter text-nav font-light links'>
						<li>
							<a>Hem</a>
						</li>
						<li>
							<a>Om oss</a>
						</li>
						<li>
							<a>Nyheter</a>
						</li>
						<li>
							<a>Nyinflyttad</a>
						</li>
						<li>
							<a>Kontakt</a>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default Header
