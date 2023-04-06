import React from 'react';
import { nanoid } from 'nanoid';
import {
  PhoneBookForm,
  PhoneBookLabel,
  PhoneBookInput,
  PhoneBookButton,
} from './Form.styled';

const nameId = nanoid();
const numberId = nanoid();

class Form extends React.Component {
  render() {
    const { onInputChange, onAddContact } = this.props;
    return (
      <div>
        <PhoneBookForm onSubmit={onAddContact}>
          <PhoneBookLabel htmlFor={nameId}>
            Name
            <PhoneBookInput
              id={nameId}
              onChange={onInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </PhoneBookLabel>
          <PhoneBookLabel htmlFor={numberId}>
            Number
            <PhoneBookInput
              id={numberId}
              onChange={onInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </PhoneBookLabel>
          <PhoneBookButton type="submit">Add Contact</PhoneBookButton>
        </PhoneBookForm>
      </div>
    );
  }
}
export default Form;
