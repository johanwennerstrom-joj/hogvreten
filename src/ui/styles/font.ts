import { Inter, Sen } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--inter', weight: ['200', '400', '500', '600', '700'] })

const sen = Sen({ weight: ['400', '700'], subsets: ['latin'], variable: '--sen' })

const fontstring = clsx(inter.variable, sen.variable)

export default fontstring
