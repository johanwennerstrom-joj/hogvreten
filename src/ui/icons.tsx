import clsx from 'clsx'
import { MouseEventHandler } from 'react'

type TSvgClickEvent = MouseEventHandler<SVGSVGElement>

export const Inspect = ({ onClick }: { onClick?: TSvgClickEvent }) => {
	return (
		<svg
			onClick={onClick}
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='cursor-pointer'
		>
			<path
				d='M1.33333 16C0.966667 16 0.652778 15.8694 0.391667 15.6083C0.130556 15.3472 0 15.0333 0 14.6667V10.8444H1.33333V14.6667H5.15556V16H1.33333ZM10.8444 16V14.6667H14.6667V10.8444H16V14.6667C16 15.0333 15.8694 15.3472 15.6083 15.6083C15.3472 15.8694 15.0333 16 14.6667 16H10.8444ZM0 5.15556V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H5.15556V1.33333H1.33333V5.15556H0ZM14.6667 5.15556V1.33333H10.8444V0H14.6667C15.0333 0 15.3472 0.130556 15.6083 0.391667C15.8694 0.652778 16 0.966667 16 1.33333V5.15556H14.6667ZM7.32987 9.55556C7.9544 9.55556 8.48148 9.3419 8.91111 8.91458C9.34074 8.48726 9.55556 7.96133 9.55556 7.3368C9.55556 6.71227 9.3419 6.18519 8.91458 5.75556C8.48726 5.32593 7.96133 5.11111 7.3368 5.11111C6.71227 5.11111 6.18519 5.32477 5.75556 5.75209C5.32593 6.17941 5.11111 6.70533 5.11111 7.32987C5.11111 7.9544 5.32477 8.48148 5.75209 8.91111C6.17941 9.34074 6.70533 9.55556 7.32987 9.55556ZM11.6222 12.5778L9.31111 10.2667C8.98519 10.4741 8.65556 10.6296 8.32222 10.7333C7.98889 10.837 7.66273 10.8889 7.34373 10.8889C6.35902 10.8889 5.51852 10.5407 4.82222 9.84444C4.12593 9.14815 3.77778 8.31111 3.77778 7.33333C3.77778 6.35556 4.12593 5.51852 4.82222 4.82222C5.51852 4.12593 6.35556 3.77778 7.33333 3.77778C8.31111 3.77778 9.14815 4.12593 9.84444 4.82222C10.5407 5.51852 10.8889 6.35902 10.8889 7.34373C10.8889 7.66273 10.8333 7.98889 10.7222 8.32222C10.6111 8.65556 10.4519 8.98519 10.2444 9.31111L12.5778 11.6444L11.6222 12.5778Z'
				fill='black'
			/>
		</svg>
	)
}

export const Download = ({ onClick }: { onClick?: TSvgClickEvent }) => {
	return (
		<svg
			onClick={onClick}
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			className='cursor-pointer'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V10.925H1.5V14.5H14.5V10.925H16V14.5C16 14.9 15.85 15.25 15.55 15.55C15.25 15.85 14.9 16 14.5 16H1.5ZM8 12.175L3.175 7.35L4.25 6.275L7.25 9.275V0H8.75V9.275L11.75 6.275L12.825 7.35L8 12.175Z'
				fill='black'
			/>
		</svg>
	)
}

export const Arrow = ({
	onClick,
	direction,
	overrideSize
}: {
	onClick?: TSvgClickEvent
	direction: 'default' | 'rotate'
	overrideSize?: {
		height: number
		width: number
	}
}) => {
	return (
		<svg
			onClick={onClick}
			width={overrideSize?.width ? overrideSize.width : 32}
			height={overrideSize?.height ? overrideSize.height : 32}
			viewBox='0 0 32 32'
			className={clsx('cursor-pointer', {
				'rotate-180': direction === 'rotate'
			})}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M16 32L13.9 29.85L26.25 17.5H0V14.5H26.25L13.9 2.15L16 0L32 16L16 32Z' fill='black' />
		</svg>
	)
}

export const Close = ({ onClick }: { onClick?: TSvgClickEvent }) => {
	return (
		<svg
			onClick={onClick}
			width='28'
			height='28'
			viewBox='0 0 28 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='cursor-pointer'
		>
			<path
				d='M2.44961 27.6496L0.349609 25.5496L11.8996 13.9996L0.349609 2.44961L2.44961 0.349609L13.9996 11.8996L25.5496 0.349609L27.6496 2.44961L16.0996 13.9996L27.6496 25.5496L25.5496 27.6496L13.9996 16.0996L2.44961 27.6496Z'
				fill='black'
			/>
		</svg>
	)
}
