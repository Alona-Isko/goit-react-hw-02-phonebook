import React from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';


class App extends React.Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <h3>Name</h3>
          <input></input>
          <h3>Number</h3>
          <input></input>
          <button>Add contact</button>
        </div>

        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input></input>
          <ContactList
            contacts={contacts}
          />
        </div>
      </div>
    );
  }
}

export default App;
