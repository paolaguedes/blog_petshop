import React from 'react';
import ListaPost from '../componentes/ListaPost';
import { useParams } from 'react-router-dom';

const SubCategoria = () => {
  const { subcategoria } = useParams()

  return(
    <>
    <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>
    </>
  )
}

export default SubCategoria