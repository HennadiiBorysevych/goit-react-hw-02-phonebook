import React from 'react';
import PropTypes from 'prop-types';

import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';

class Contacts extends React.Component {
  render() {
    const { contacts, filterContacts, onDeleteContact } = this.props;
    return (
      <ContactsContainer>
        <ContactsList>
          {filterContacts().map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <p>
                {name}: {number}
              </p>
              <Button type="button" onClick={() => onDeleteContact(id)}>
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
