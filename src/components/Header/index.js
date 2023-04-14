import './style.css'
import { motion } from 'framer-motion'

export const Header = () => {
    return (
        <header className='conteiner_header'>
            <motion.h1 
                initial={{x: 300}}
                animate={{x:0}}
                transition={{duration: 0.8}}
            >
                Assistência técnica especializada em celulares
            </motion.h1>
        </header>
    )
}