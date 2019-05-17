import React, { Component } from 'react';
import Accordian from './components/accordian/Accordian'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Accordian heading="heading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ea, beatae, corrupti unde natus, nesciunt quae hic quidem fugit ipsam consectetur rerum nemo harum modi fuga nulla. Officiis, facere quibusdam?
        </Accordian>
      </div>
    );
  }
}

export default App;
