// importing react and react.component which is needed to parse JSX and provide functionality to class based components
import React, { Component } from 'react';
// importing app component's CSS styles 
import './App.css';
// importing the header component
import Header from './Header';
// importing the SectionMain component  
import SectionMain from './SectionMain';
// importing the Aside component
import Aside from './Aside';
// importing Footer component
import Footer from './Footer';
// creating an App component that inherits methods from the React.Component parent class
class App extends Component {
// the required render method which returns the html that will be rendered
  render() {
    return (
      // the App component contains the Header (w/ props of green background color and width of 50%), the SectionMain, Aside, and Footer
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}
// exporting the App component, making it public to the rest of the application.
export default App;
