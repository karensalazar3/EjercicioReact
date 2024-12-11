import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Person from './components/Person/Person'
import './App.css';

function App() {
  const dishes = [
    {
      id: 1,
      name: 'Plato 1',
      description: 'Este es el plato 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Plato 2',
      description: 'Este es el plato 2',
      price: 20,
    },
    {
      id: 3,
      name: 'Plato 3',
      description: 'Este es el plato 3',
      price: 15,
    },
  ];

  return (
    <div>
      <Header />  
      <img src="https://th.bing.com/th/id/OIP.cOiUqe84m90EJQ1-VSy9swAAAA?rs=1&pid=ImgDetMain" alt="Logo del Restaurante"className="header-logo" />
      <h1>Person List</h1>
      <Person name="Karen" surname="Salazar" age={30} />
      <Person name="Giancarlo" surname="Salazar" age={18} />
      <Person name="Daniela" surname="llano" age={25} />
      <Home dishes={dishes} /> 
    </div>
  );
}

export default App
