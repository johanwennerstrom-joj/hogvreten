import { useOnClickOutside } from 'usehooks-ts'
import { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Close } from 'ui/icons'

interface IModal {
	children: ReactNode
	show: boolean
	handleClose: () => void
}

const ModalContent = ({ children, close }: { children: ReactNode; close: () => void }) => {
	const ref = useRef(null)
	useOnClickOutside(ref, close)
	return (
		<div
			ref={ref}
			className='fixed p-md overflow-y-auto bg-white h-[80vh] min-w-[60vw] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[200] '
		>
			<div className='flex justify-end pb-md'>
				<Close onClick={close} />
			</div>
			<div ref={ref}>{children}</div>
		</div>
	)
}

const Modal = ({ children, show, handleClose }: IModal) => {
	return (
		<>
			{show
				? createPortal(<ModalContent close={handleClose}>{children}</ModalContent>, document.body)
				: null}
		</>
	)
}

export default Modal
