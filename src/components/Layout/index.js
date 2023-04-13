import { Header } from '../Header'
import './style.css'

export const Layout = ({children})=>{
    return (
        <div className='conteiner_layout'>
           <Header />
            {children}
        </div>
    )
}