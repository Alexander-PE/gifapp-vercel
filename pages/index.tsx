import Head from 'next/head'
import { useState } from 'react'
import { AddCategoria } from '../components/AddCategoria'
import { GifGrid } from '../components/GifGrid'


export default function Home() {
  const [categorias, setCategorias] = useState(['One Punch'])
  return (
    <div className='bg-[rgb(36,36,36)] min-h-screen '>
      <Head>
        <title>Gif Expert</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>

      <div className='p-8'>
        <AddCategoria setCategorias={setCategorias} categorias={categorias} />
        
        <ol> 
          {
            categorias.map((categoria, index) => <GifGrid key={index} categoria={categoria}/>)
          }
        </ol>

      </div>
      
    </div>
  )
}
