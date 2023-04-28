import React from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import { nanoid } from 'nanoid';
import {
  PhoneBookForm,
  PhoneBookLabel,
  PhoneBookInput,
  PhoneBookButton,
} from './Form.styled';

const validation = Yup.object().shape({
  name: Yup.string().min(2).max(50).required(),
  number: Yup.string().min(7).max(15).required(),
});

const initialsValues = {
  name: '',
  number: '',
};
const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    onSubmit(value.name, value.number, nanoid());
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialsValues}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <PhoneBookForm>
          <PhoneBookLabel>
            Name
            <PhoneBookInput type="text" name="name" />
            <ErrorMessage name="name" />
          </PhoneBookLabel>
          <PhoneBookLabel>
            Number
            <PhoneBookInput type="tel" name="number" />
            <ErrorMessage name="number" />
          </PhoneBookLabel>
          <PhoneBookButton type="submit">Add Contact</PhoneBookButton>
        </PhoneBookForm>
      </Formik>
    </div>
  );
};

export default ContactForm;
