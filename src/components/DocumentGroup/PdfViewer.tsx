import { memo, useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { pdfjs } from 'react-pdf'
import { Arrow } from 'ui/icons'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer = ({ url, width, height }: { url: string; width: number; height: number }) => {
	const [pages, setPages] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const handleLoadSuccess = (pageNumber: number) => {
		setPages(pageNumber)
	}
	return (
		<>
			{url ? (
				<Document file={{ url }} onLoadSuccess={(pdf) => handleLoadSuccess(pdf.numPages)}>
					<Page
						renderTextLayer={false}
						renderAnnotationLayer={false}
						pageNumber={currentPage}
						height={height}
						width={width}
					/>
					<div className='flex justify-between pt-md'>
						<p className='label'>
							{currentPage}/{pages}
						</p>
						<div className='flex gap-x-md cursor-pointer'>
							<Arrow
								onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
								direction='rotate'
							/>
							<Arrow
								onClick={() => setCurrentPage((prev) => (prev < pages ? prev + 1 : prev))}
								direction='default'
							/>
						</div>
					</div>
				</Document>
			) : null}
		</>
	)
}

export default memo(PdfViewer)
