import { isFilled } from '@prismicio/helpers'
import { PrismicLink, SliceComponentProps } from '@prismicio/react'
import { FilledLinkToMediaField } from '@prismicio/types'
import Modal from 'components/Modal/Modal'
import dynamic from 'next/dynamic'

import { useEffect, useRef, useState } from 'react'

import { DokumentsgrupperingSlice } from 'types.generated'
import { Download, Inspect } from 'ui/icons'
import { checkFile } from 'utils/general'

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false })

const DocumentGroup = ({ slice }: SliceComponentProps<DokumentsgrupperingSlice>) => {
	const [show, setShow] = useState(false)
	const [pdfLink, setPdfLink] = useState<FilledLinkToMediaField | null>(null)
	const [containerSize, setContainerSize] = useState({ h: 400, w: 768 })
	const ref = useRef<HTMLDivElement>(null)
	const handleClick = (pdf: FilledLinkToMediaField) => {
		console.log(pdf)
		setShow(true)
		setPdfLink(pdf)
	}

	const handleClose = () => {
		setShow(false)
		setPdfLink(null)
	}

	useEffect(() => {
		if (ref.current) {
			setContainerSize({ h: ref.current.clientHeight, w: ref.current.clientWidth })
		}
	}, [])

	return (
		<div className='py-md'>
			<p className='h5'>{slice.primary.title}</p>
			<ul className='py-sm'>
				{slice.items.map((item) => {
					if (isFilled.linkToMedia(item.link)) {
						return (
							<li key={item.link_text} className='flex gap-2 items-center py-1'>
								<PrismicLink field={item.link}>
									<Download />
								</PrismicLink>
								{checkFile(item.link.url) ? (
									<Inspect
										onClick={() => handleClick(item.link as FilledLinkToMediaField)}
									/>
								) : null}
								<p className='p'>{item.link_text}</p>
							</li>
						)
					}
					return null
				})}
				<Modal show={show} handleClose={handleClose}>
					<div ref={ref} className='h-full w-full'>
						<PdfViewer
							height={containerSize.h}
							width={containerSize.w}
							url={pdfLink?.url ?? ''}
						/>
					</div>
				</Modal>
			</ul>
		</div>
	)
}

export default DocumentGroup
