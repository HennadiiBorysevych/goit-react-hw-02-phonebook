import React from 'react';
import Form from './form/Form';
import Title from './title/Title';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onFilterChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onAddContact = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberExist = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (isContactExist || isNumberExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <Title title="PhoneBook" />
        <Form
          onInputChange={this.onInputChange}
          onAddContact={this.onAddContact}
        />
        <Title title="Contacts" />
        <Filter
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
          filterContacts={this.filterContacts}
        />
        <Contacts
          filterContacts={this.filterContacts}
          contacts={this.state.contacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
export default App;
