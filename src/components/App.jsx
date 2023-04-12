import React from 'react';
import { Form, Title, Contacts, Filter } from './index';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = (name, number, id) => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: id,
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
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

  render() {
    return (
      <div>
        <Title title="PhoneBook" />
        <Form onSubmit={this.onAddContact} />
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
