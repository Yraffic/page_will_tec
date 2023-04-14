import { Header } from '../Header'
import {Footer} from '../Footer'
import './style.css'

export const Layout = ({children})=>{
    return (
        <div className='conteiner_layout'>
           <Header />
            {children}
            <Footer />
        </div>
    )
}