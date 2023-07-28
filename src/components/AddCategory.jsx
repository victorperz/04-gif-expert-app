import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    // console.log({setCategories});
    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => {
    //     // console.log(event.target.value);
    //     setInputValue(event.target.value);
    // }

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( (categories) =>[ inputValue , ...categories]);
        onNewCategory(inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>

        <input 
            type="text"
            placeholder="Buscar Gift"
            value={ inputValue }
            // onChange={ (event) =>  onInputChange(event) }
            onChange={ onInputChange }
        />

    </form>
    
  )
}
