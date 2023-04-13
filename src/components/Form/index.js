import { useState } from 'react';
import './style.css'
import { useForm } from 'react-hook-form';

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()



    const form = (data) => {
        const description = data.description.replace(' ', '%20')
        
        const text = 
        `Nome%20${data.name}%20marca%20do%20aparelho%20${data.phone}%20problema%20%${description}`

        const link = 
        `https://wa.me/5598987297817?text=${text}`

        const whatsapp = document.createElement('a')
            whatsapp.href = link

            document.body.appendChild(whatsapp)

            whatsapp.click();

            document.body.removeChild(whatsapp)
    }

    return (
        <div className='conteiner_forms'>
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
                    {...register('name', { require: true })}
                />
                <span>{errors.name && "Digite seu nome"}</span>
                <label htmlFor='phone'>Marca do aparelho</label>
                <select {...register("phone")}>
                    <option value="female">valor 1</option>
                    <option value="male">valor 2</option>
                    <option value="other">valor 3</option>
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
        </div>
    )
}