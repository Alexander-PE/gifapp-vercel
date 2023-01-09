const api_key = "SNxuvzv6W4PC2FHXGYKqnERnaUE9azSG";

export const getGifs = async(categoria:any) => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=4&api_key=${api_key}`);
    const {data} = await res.json();

    const gifs = data.map((img:any) => {
        return {
            id: img.id, 
            title: img.title, 
            url: img.images?.downsized_medium.url 
        }
    })

    // setImages(gifs);
    return gifs;
}