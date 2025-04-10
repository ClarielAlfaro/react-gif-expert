import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('')
  
   const onInputChange = ({target}) => {    
    setInputValue(target.value);

   }

   const onSubmit = (event) => {
    event.preventDefault();

    const clean = inputValue.trim();

    if(clean.length <= 1) return;

    onNewCategory(clean);
    setInputValue('');    

   }
  
    return (
        <form onSubmit={onSubmit}>
            <input 
        type='text'
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
    
    />
        </form>
    
  )
}
