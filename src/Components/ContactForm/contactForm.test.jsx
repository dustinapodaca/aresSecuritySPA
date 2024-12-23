import { fireEvent, within } from '@testing-library/react';
import { render } from '../../test-utils';
import { screen } from '@testing-library/react';

import formData from 'form-data';
import Mailgun from 'mailgun.js';
import Contact from './ContactForm';

jest.mock('mailgun.js');

describe('ContactForm', () => {
  test('renders ContactForm component', () => {
    render(<Contact />);

    const contactForm = within(screen.getByTestId('contact-form'));

    expect(contactForm).toBeInTheDocument();
    expect(contactForm).toHaveTextContent('Contact Us');
    expect(contactForm).toHaveTextContent('Name');
    expect(contactForm).toHaveTextContent('Email');
    expect(contactForm).toHaveTextContent('Subject');
    expect(contactForm).toHaveTextContent('Message');
    expect(contactForm).toHaveTextContent('Submit');
    expect(contactForm).toHaveAttribute('method', 'POST');
  });

  test('renders ContactForm component with correct fields', () => {
    render(<Contact />);

    const nameInput = within(screen.getByLabelText('Name'));
    const emailInput = within(screen.getByLabelText('Email'));
    const subjectInput = within(screen.getByLabelText('Subject'));
    const messageInput = within(screen.getByLabelText('Message'));

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(subjectInput).toHaveAttribute('type', 'text');
    expect(messageInput).toHaveAttribute('type', 'text');

    expect(nameInput).toHaveAttribute('name', 'name');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(subjectInput).toHaveAttribute('name', 'subject');
    expect(messageInput).toHaveAttribute('name', 'message');

    expect(nameInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('required');
    expect(subjectInput).toHaveAttribute('required');
    expect(messageInput).toHaveAttribute('required');
  });

test('form input fields correctly update the state', () => {
    render(<Contact />);

    const nameInput = within(screen.getByLabelText('Name'));
    const emailInput = within(screen.getByLabelText('Email'));
    const subjectInput = within(screen.getByLabelText('Subject'));
    const messageInput = within(screen.getByLabelText('Message'));

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Get A Quote' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });

    expect(nameInput.value).toBe('Test Name');
    expect(emailInput.value).toBe('test@gmail.com');
    expect(subjectInput.value).toBe('Get A Quote');
    expect(messageInput.value).toBe('Test Message');
  });

  test('form correctly sends a POST request to the Mailgun API', async () => {
    render(<Contact />);

    const nameInput = within(screen.getByLabelText('Name'));
    const emailInput = within(screen.getByLabelText('Email'));
    const subjectInput = within(screen.getByLabelText('Subject'));
    const messageInput = within(screen.getByLabelText('Message'));

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: 'test@gmail.com ' } });
    fireEvent.change(subjectInput, { target: { value: 'Get A Quote' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });

    const submitButton = within(screen.getByText('Submit'));

    fireEvent.click(submitButton);

    expect(Mailgun).toHaveBeenCalledTimes(1);
    expect(Mailgun).toHaveBeenCalledWith(formData);
  });
});






    