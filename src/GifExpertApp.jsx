import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([]);

  const onAddCategory = ( newCategory ) => {

    // const test = 'Valorant';
    // setCategories( cat => [ test, ...cat ] );

    // Evitar duplicados
    if( categories.includes( newCategory) ) return;

    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory 
        // setCategories= { setCategories } 
        onNewCategory={ (value) => onAddCategory( value ) }
      />
      
      { 
        categories.map( ( category ) =>  (
          <GifGrid key={ category } category={ category } />
        )) 
      }
    </>
  )
}
