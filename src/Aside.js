import React, { Component } from 'react';
import './Aside.css';
// Aside class component returns an aside html element with a class of "Aside"
class Aside extends Component {
  render() {
    return (
        <aside className="Aside">
        </aside>

    );
  }
}
// exporting the Aside componenet, making it available for import in other modules
export default Aside;
