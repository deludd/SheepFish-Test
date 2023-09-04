import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  ButtonWrapper,
  SuccessMessage,
} from './styles';
import InputField from 'components/InputField/InputField';

const initialValues = {
  title: '',
  description: '',
  price: '',
  rating: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Назва товару обовʼязкова'),
  description: Yup.string().required('Автор обовʼязковий'),
  price: Yup.number()
    .typeError('Ціна повинна бути числом')
    .positive('Ціна повинна бути позитивним числом')
    .integer('Ціна повинна бути цілим числом')
    .required('Ціна обовʼязкова'),
  rating: Yup.number()
    .typeError('Рейтинг повинен бути числом')
    .min(1, 'Мінімальний рейтинг - 1')
    .max(5, 'Максимальний рейтинг - 5')
    .required('Рейтинг обовʼязковий'),
});

const AddProductForm = ({ addProductToTable }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    values.images = ['https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg'];
    addProductToTable(values);
    setFormSubmitted(true);
    resetForm();
  };

  return (
    <div>
      {formSubmitted ? (
        <SuccessMessage>
          <h2>Товар було додано!</h2>
        </SuccessMessage>
      ) : (
        <div>
          <h2>Додати новий товар</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <InputField label="Назва товару" name="title" type="text" />
                <InputField label="Автор" name="description" type="text" />
                <InputField label="Ціна" name="price" type="number" />
                <InputField label="Рейтинг" name="rating" type="number" />
              </div>

              <ButtonWrapper>
                <StyledButton type="submit">Додати товар</StyledButton>
              </ButtonWrapper>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default AddProductForm;
