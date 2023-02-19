import { ChangeEventHandler } from 'react'

interface IInputProps {
	name: string
	placeholder: string
	onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ name, placeholder, onChange }: IInputProps) => {
	return (
		<label>
			<input
				onChange={onChange}
				placeholder={placeholder}
				className='border border-gray-300 border-opacity-50 p-xs placeholder:text-gray-900 placeholder:font-inter placeholder:text-label outline-none w-full'
				name={name}
			/>
		</label>
	)
}

export default Input
