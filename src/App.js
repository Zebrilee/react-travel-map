import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'
import AsideMenu from './components/AsideMenu/AsideMenu'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <main className="main">
          <AsideMenu />
          <Map />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
