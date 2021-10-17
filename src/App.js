import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          <h3>Name</h3>
          <h3>Number</h3>
          <button>Add contact</button>
        </div>
      </div>
    );
  }
}

export default App;
