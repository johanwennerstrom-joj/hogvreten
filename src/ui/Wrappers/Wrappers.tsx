import clsx from 'clsx'
import { ReactNode } from 'react'

interface IWrapperProps {
	children: ReactNode
	css?: string
}

const Section = ({ children, css }: IWrapperProps) => {
	return <section className={clsx('py-lg md:py-xl', css)}>{children}</section>
}

const Container = ({ children, css }: IWrapperProps) => {
	return <div className={clsx('px-md md:px-lg', css)}>{children}</div>
}

export { Section, Container }
