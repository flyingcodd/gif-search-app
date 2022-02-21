import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGird = ({category}) =>{

    const {data:images,loading} = useFetchGifs(category);
    // const [images, setImages] = useState([]);
    // useEffect(()=>{
    //     getGifs(category).then(setImages);
    // },[category])

    
    ///////getGifs();
    return (
        <div>
            <h3>{category}</h3>
            {loading&&<p>Loading...</p>}
            <ol>
                {images.map((img)=>(
                    <GifGridItem {...img} key={img.id}></GifGridItem>
                ))}
            </ol>
        </div>
    );
}
