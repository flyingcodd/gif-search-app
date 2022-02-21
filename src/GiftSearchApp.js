import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGird } from './components/GifGrid';

export const GiftSearchApp=()=>{
    //const categories = ['One Piece','Naruto','Dragon Ball'];
    const [categories,setCategories]= useState(['One Piece']);
    /*const handleAdd = ()=>{
        //setCategories(['Attack on Titan',...Categories]);
        setCategories(cats => ['Attack on Titan',...cats]);
    }*/
    return (
        <div>
            <h2>GiftSearchApp</h2>
            <br/>
            <AddCategory setCategories={setCategories}></AddCategory>
            <ol>
                {
                    categories.map( category=>(
                         <GifGird key={category} category={category}></GifGird>
                    ))
                }
            </ol>
        </div>
    );
}