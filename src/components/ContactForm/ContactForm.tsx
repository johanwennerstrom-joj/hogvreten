import Button from 'components/Button/Button'
import useFormReducer from 'hooks/useFormReducer'
import { ChangeEvent, MouseEvent } from 'react'
import Input from './Input'

const ContactForm = () => {
	const { inputs, dispatch } = useFormReducer<{
		name: string
		email: string
		phone: string
		message?: string
	}>()

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch({ [e.target.name]: e.target.value })
	}
	const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log(inputs)
	}
	return (
		<form className='flex flex-col gap-y-xs py-sm w-full md:w-[768px]'>
			<Input onChange={(e) => handleChange(e)} placeholder='För- och efternamn' name='name' />
			<Input onChange={(e) => handleChange(e)} placeholder='Din e-post' name='email' />
			<Input onChange={(e) => handleChange(e)} placeholder='Telefonnummer' name='phone' />
			<label>
				<textarea
					onChange={(e) => handleChange(e)}
					placeholder='Meddelande'
					name='message'
					className='border laceholder:font-inter placeholder:text-label w-full border-opacity-50 resize-none border-gray-300 px-xs pt-xs pb-md placeholder:text-gray-900 outline-none'
				/>
			</label>
			<Button onClick={(e) => handleSubmit(e)}>Skicka</Button>
		</form>
	)
}

export default ContactForm
