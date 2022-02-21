import React from 'react';

export const GifGridItem =({id,titulo,url})=>{
    return (
        <div className='card'>
            <img src={url} alt={titulo}></img>
            <p>{titulo}</p>
        </div>
    )
}