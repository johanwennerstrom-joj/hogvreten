import { MouseEventHandler, ReactNode } from 'react'

interface IButtonProps {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	chevron?: boolean
}

const Button = ({ children, onClick, chevron = true }: IButtonProps) => {
	return (
		<button onClick={onClick} className='bg-yellow text-white py-xs px-md font-lato text-body'>
			{children}
			{chevron ? ' >' : ''}
		</button>
	)
}

export default Button
