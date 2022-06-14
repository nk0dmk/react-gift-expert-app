import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category );


  return (
    <>
    <h3>{ category }</h3>
    {
      isLoading && ( <h2>Cargando...</h2>)
    }
    <div className='card-grid'>
      { 
        images.map( ( image ) => (
          // <GifItem key={ image.id } title={ image.url } url={ image.url }/>
          <GifItem 
            key={ image.id }
            // esparcimos el objeto imagen al enviarla al componente
            { ...image }
          />
        ))
      }
    </div>
    </>
  )
}