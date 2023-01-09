import { useState } from 'react'

type Props = {
    setCategorias: ([]) => void,
    categorias: string[]
}

export const AddCategoria = ({ setCategorias, categorias }: Props) => {

    const [Dato, setDato] = useState('')

    const handleAdd = (e: any) => {
        e.preventDefault();

        if (Dato.trim().length > 2) {
            setCategorias([Dato, ...categorias]);
            setDato('');
        } else {
            alert('El nombre de la categoria debe tener al menos 3 caracteres');
        }
    }

    return (
        <form onSubmit={handleAdd}>
            <div className="mb-5">
                <input placeholder='Ingrese una categoria' className='shadow bg-transparent text-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' type="text" value={Dato} onChange={(e) => { setDato(e.target.value) }} />
            </div>
        </form>
    )
}