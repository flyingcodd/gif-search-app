import React from "react";
import { useState } from "react/cjs/react.development";
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) =>{

    const [inputValue,setInputValue] = useState("hola");
    
    const handleInputChage = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChage} ></input>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}