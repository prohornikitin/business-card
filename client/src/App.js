import logo from './logo.svg'
// import './App.css';
// import style from './App.css'
import React from 'react';
import _ from './main.css'
import Logo from './components/Logo/Component'


function App() {
  return  (
    <div>
      <header className={_.flexContainer} style={{
          justifyContent: "space-around",
          width: "100vw",
        }}>
            <Logo style={{
              width: "50%",
            }} imgSrc={logo} text="Yarik"></Logo>
      </header>
    </div>
  );
}
export default App;