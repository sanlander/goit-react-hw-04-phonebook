import { nanoid } from 'nanoid';
import { FormBox, Label, Input, Button, Error } from './ContactForm.modules';
import { firstLetterToUppercase } from 'components';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Required field'),
  number: yup.string().phone('UA', true, `Phone is invalid`),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmitForm }) => {
  const handleFormSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(5),
      name: firstLetterToUppercase(values.name),
      number: values.number,
    };

    onSubmitForm(newContact);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormBox autoComplete="off">
        <Label htmlFor="name">
          Enter your name
          <br />
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <br />
          <ErrorMessage component={Error} name="name" />
        </Label>
        <br />
        <Label htmlFor="number">
          Enter your number
          <br />
          <Input
            id="number"
            type="tel"
            name="number"
            placeholder="+38 067 455 22 88"
          />
          <br />
          <ErrorMessage component={Error} name="number" />
        </Label>
        <br />
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
};
