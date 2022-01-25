import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';


function App() {

  function onSubmit(values, actions){
    console.log('SUBMIT', values);
  }

  function validate (values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nome é obrigatório';
    }
    if (!values.autor) {
      errors.autor = 'Autor é obrigatório';
    }
    if (!values.number) {
      errors.number = 'Ano de Publicação é obrigatório';
    }
    return errors;
  }

  return (
    <div className="App">
      <h1>Cadastro de Livros</h1>
      <Formik
        validate={validate}
        onSubmit = {onSubmit}
        initialValues={{
          name: '',
          autor: '',
          number: '',
      }}
        render={({ values, errors }) => (
          <Form>
            <div>
              <label className='nome'>Nome</label>
              <Field input name="name" type="text"/>
              {errors.name && (
                <span>{errors.name}</span>
              )}
            </div>
            <div>
              <label>Autor</label>
              <Field input name="autor" type="text" />
              {errors.autor && (
                <span>{errors.autor}</span>
              )}
            </div>
            <div>
              <label>Ano de Publicação</label>
              <Field input name="number" type="number"/>
              {errors.number && (
                <span>{errors.number}</span>
              )}
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;