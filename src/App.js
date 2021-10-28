import React from "react";
import NavBar from './componets/NavBar/Nav';
import Cards from './componets/card/Cards'
import styled from "styled-components";



const Div = styled.div`
  display: flex;
  flex-direction: row;
  background-color:rgba(129,170,180, 0.7);
  background:cover;
  @media (max-width: 800px) {
    width: 100%;
    height:1000px;
    flex-direction: column-reverse;
  }
`;

function App() {
 
  
  
  return (
    <div className='app'>
    <Div className="App">
      
      <NavBar />
      <Cards/>
      
    </Div>
    </div>
  );
}

export default App;