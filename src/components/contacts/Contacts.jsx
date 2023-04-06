import React from 'react';
import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  FilterTitle,
  FilterInput,
  ContactsItem,
} from './Contacts.styled';
import { nanoid } from 'nanoid';

const contactID = nanoid();

class Contacts extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <ContactsContainer>
        {contacts.length === 0 && <Notification message="No contacts yet :)" />}
        {contacts.length > 0 && (
          <>
            <FilterTitle>
              Find contacts by name
              <FilterInput type="text" />
            </FilterTitle>
            <ContactsList>
              {contacts.map(contact => (
                <ContactsItem key={contactID}>
                  {contact.name}: {contact.number}
                </ContactsItem>
              ))}
            </ContactsList>
          </>
        )}
      </ContactsContainer>
    );
  }
}
export default Contacts;
