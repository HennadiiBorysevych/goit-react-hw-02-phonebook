import React from 'react';
import Form from './form/Form';
import Title from './title/Title';
import Contacts from './contacts/Contacts';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onAddContact = e => {
    e.preventDefault();
    const { name, number, id } = this.state;
    const contact = {
      name,
      number,
      id,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
    }));
    console.log(this.state.contacts);
    e.target.reset();
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
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
