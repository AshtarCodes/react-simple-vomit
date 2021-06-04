import React, { Component } from 'react';
import './SectionMain.css';
// SectionMain componenet returns a section html element with a class of SectionMain
class SectionMain extends Component {
  render() {
    return (
        <section className="SectionMain">
        </section>

    );
  }
}
// this componenet is exported and is made public to the rest of the app, making it available for import. 
export default SectionMain;
