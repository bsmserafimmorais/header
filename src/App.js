import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({ name }) => (
  <BrowserRouter>
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rota">Rota</Link>
          </li>
          <li>
            <Link to="/tabela">tabela</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  </BrowserRouter>
)

export default App