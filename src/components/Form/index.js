import { useState } from 'react';
import './style.css'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [erro, setErro] = useState('')


    const form = (data) => {
        if (data.name === '') {
            return setErro('não deve ser informado')
        }
        const description = data.description.replace(' ', '%20')

        const text =
            `Nome:%20${data.name}%20Marca:%20${data.phone}%20Problema:%20%${description}`

        const link =
            `https://wa.me/5598984171523?text=${text}`

        const whatsapp = document.createElement('a')
        whatsapp.href = link

        document.body.appendChild(whatsapp)

        whatsapp.click();

        document.body.removeChild(whatsapp)
    }

    return (
        <motion.div
            className='conteiner_forms'
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Entre em contato !</h2>
            <form
                onSubmit={handleSubmit(form)}
                className='forms flex'
            >
                <label htmlFor='name'>Nome</label>
                <input
                    type='text'
                    id='name'
                    placeholder='Digite seu nome'
                    name='name'
                    {...register('name')}
                />
                <span>{erro}</span>
                <label htmlFor='phone'>Marca do aparelho</label>
                <select {...register("phone")}>
                    <option value="Samsung">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="LG">LG</option>
                    <option value="Motorola">Motorola</option>
                    <option value='iPhone'>iPhone</option>
                    <option value='outro'>Outro</option>
                </select>
                <span>{errors.phone && "Marca do aparelho deve ser informada!"}</span>
                <label
                    htmlFor='description'
                >
                    Qual problema do seu aparelho?
                </label>
                <textarea
                    id='description'
                    name='description'
                    {...register('description')}
                />
                <button
                    type='submit'
                    className='btn-forms'
                >
                    entrar em contato
                </button>
            </form>
        </motion.div>
    )
}