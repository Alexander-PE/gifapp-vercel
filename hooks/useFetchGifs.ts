import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria:any) => {

    const [state, setState] = useState({
        data:[],
        loading:true,
    });

    useEffect(() => {
        getGifs(categoria).then(img => {

                setState({
                    data:img,
                    loading:false,
                });
        });
    }, [categoria]) 
    
    return state; // {data:[], loading:true}
}