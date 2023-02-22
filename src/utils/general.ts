export const checkFile = (filelocation: string) => {
	const s = filelocation.split('.').pop()
	return s?.toLowerCase() === 'pdf'
}
