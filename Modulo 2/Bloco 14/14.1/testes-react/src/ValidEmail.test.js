import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testando atribuição de e-mail', () => {
  test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testes extras', () => {
  render(<ValidEmail email='' />); // Note que utilizamos o 'queryBy' ao invés do 'getBy', pois o getBy retorna um erro
  const header = screen.queryByTestId('valida-email'); // caso o elemento não seja encontrado, encerrando o teste, já o queryBy retorna null,
  expect(header).not.toBeInTheDocument(); // sendo útil para verificar a não existência de algum elemento na página.
})

})

