import React from 'react';
import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';

class Contacts extends React.Component {
  render() {
    const { contacts, filterContacts } = this.props;
    return (
      <ContactsContainer>
        <ContactsList>
          {filterContacts().map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <p>
                {name}: {number}
              </p>
              <Button
                type="button"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Delete
              </Button>
            </ContactsItem>
          ))}
        </ContactsList>
        {contacts.length === 0 && <Notification message="No Contacts" />}
      </ContactsContainer>
    );
  }
}
export default Contacts;
