import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState(['Kimetsu no yaiba' ]);
    // console.log(categories);

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories]);
    }

    return (
    <>

       <h1>GiftExpertApp</h1>


       <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={(value) => onAddCategory(value)}
        />

            { 
              categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
               ))
            }


    </>
  )
}
