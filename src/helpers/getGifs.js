
export const getGifs = async(category) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=g0zHgLKMNY7MvkU8B1thz6jbYiwXyecD`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return{
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}