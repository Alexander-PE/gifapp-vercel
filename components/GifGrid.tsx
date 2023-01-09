import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

type Props = {
    categoria?: string
}

type Imgg = {
    id?:any,
    img?:any
}

export const GifGrid = ({categoria}: Props) => {


    const { data:images } = useFetchGifs(categoria);


    return (
        <>
              <div className="flex flex-row mt-5 gap-7 ">
                    {
                        images.map((img:Imgg) => (
                            <GifGridItem key={img.id} {...img}/>
                        ))
                    }
            </div>
        </>
    )
}