// importing React and React.Componenet to parse JSX and create class components
import React, { Component } from 'react';
// importing the Header CSS styles
import './Header.css';
// Header class component is rendering a header with backgroundColor and width as props that customize the appearance of the Header, and a class of "header-main"
class Header extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
