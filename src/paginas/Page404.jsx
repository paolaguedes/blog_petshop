import React from 'react';

import dog404 from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

export default function Page404(){
  return(
    <main className="container flex flex--centro flex--coluna">
      <img 
        className="doguito-imagem" 
        src={dog404} 
        alt="ilustração doguito"
      />
      <p className="naoencontrado-texto">
        Ops, essa página não existe!
      </p>
    </main>
  )
}