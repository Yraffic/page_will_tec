import './style.css'
import {Card} from '../Card'
import { Form } from '../Form'

export const Header = () => {
    return (
        <header className='conteiner_header'>
            <h1>Assistência técnica especializada em celulares</h1>
            <div className='conteiner_cards'>
                <Form />
                <Card />
            </div>
        </header>
    )
}