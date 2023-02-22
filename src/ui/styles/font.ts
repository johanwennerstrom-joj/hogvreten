import { Inter, Lato } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--inter', weight: ['200', '400', '500', '600', '700'] })

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--lato' })

const fontstring = clsx(inter.variable, lato.variable)

export default fontstring
