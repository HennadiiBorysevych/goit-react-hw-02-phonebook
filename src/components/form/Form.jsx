import React from 'react';
import { nanoid } from 'nanoid';
import {
  PhoneBookForm,
  PhoneBookLabel,
  PhoneBookInput,
  PhoneBookButton,
} from './Form.styled';

class Form extends React.Component {
  nameId = nanoid();
  numberId = nanoid();
  render() {
    const { onInputChange, onAddContact } = this.props;
    return (
      <div>
        <PhoneBookForm onSubmit={onAddContact}>
          <PhoneBookLabel htmlFor={this.nameId}>
            Name
            <PhoneBookInput
              id={this.nameId}
              onChange={onInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </PhoneBookLabel>
          <PhoneBookLabel htmlFor={this.numberId}>
            Number
            <PhoneBookInput
              id={this.numberId}
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
