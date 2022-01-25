import React from 'react'
import './assets/css/base/base.css'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Cabecalho from './componentes/Cabecalho'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Page404 from './paginas/Page404'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {

  return (
  <Router>
    <Cabecalho/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/sobre" component={Sobre}/>
      <Route path="/posts/:id" component={Post}/>
      <Route path="/categoria/:id" component={Categoria}/>
      <Route component={Page404}/>
    </Switch>
  </Router>
  )
}

export default App
