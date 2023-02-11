import { Container } from '@/ui/Wrappers/Wrappers'
import Image from 'next/image'
import Logo from 'public/hsb-white.png'

const Footer = () => {
	return (
		<footer className=' bg-gray-700 py-lg'>
			<Container css='grid md:grid-cols-12 gap-5'>
				<div className='col-span-6 flex flex-col gap-y-md'>
					<span className='font-inter text-body tracking-wider font-normal uppercase text-white'>
						Brf Högvreten
					</span>
					<ul className='text-white'>
						<li>
							<strong>Org. nummer:</strong> 716419-8587
						</li>
						<li>Bergsvägen 1 D</li>
						<li>000 00 Rönninge</li>
					</ul>
				</div>
				{/* <div className='col-start-8 col-span-full'>
					<Image src={Logo} alt='Hsb logga' placeholder='blur' />
				</div> */}
			</Container>
		</footer>
	)
}

export default Footer
