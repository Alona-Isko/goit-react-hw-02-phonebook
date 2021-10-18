import React, { Component } from "react";
import shortid from 'shortid';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameId = shortid.generate();
    numberId = shortid.generate();

    handleChange = ev => {
        // console.log(ev.currentTarget);
        // console.log(ev.currentTarget.name);
        // console.log(ev.currentTarget.value);
        const { name, value } = ev.currentTarget;
        this.setState({
        [name]: value,
        });
    }

    handleSubmit = ev => {
        ev.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>
                    Name
                    <input
                    type="text"
                    name="name"
                    id={this.nameId}
                    value={this.state.name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    />
                </label>
                <label htmlFor={this.numberId}>
                    Number
                    <input
                    type="tel"
                    name="number"
                    id={this.numberId}
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;