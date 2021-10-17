import React, { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import './App.css';


class App extends Component {
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = ev => {
    // console.log(ev.currentTarget);
    // console.log(ev.currentTarget.name);
    // console.log(ev.currentTarget.value);
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input></input>
          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
