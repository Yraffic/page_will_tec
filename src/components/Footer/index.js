import './style.css'
import insta from '../../assets/instagram.svg'
import tel from '../../assets/telefone.png'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <div className='conteiner_footer'>
            <h3>
                Contato
            </h3>
            <div className='contacts_footer'>
                <motion.div
                    className='contact'
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img className='tel' src={tel} alt='telefone' />
                    <span>(98)98417-1523</span>
                </motion.div>
                <motion.a
                    className='contact'
                    href='https://www.instagram.com/william_manoel20/'
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={insta} alt='instagram' />
                    <span>William_manoel20</span>
                </motion.a>
            </div>
        </div>
    )
}