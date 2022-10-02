import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import {Header} from './Header'


class App extends Component{
    render() {
        return(
            <div className="App">
                <Header/>
            </div>
        );
    }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a

        >
          Around
        </a>
      </header>
    </div>
  );
}*/

/*class Header extends Component{
    render() {
        return(
            <header className={"App-header"}
        )
    }
}*/

export default App;
