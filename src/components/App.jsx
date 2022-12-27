import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

import { nanoid } from 'nanoid';

import { Container } from './Container/Container.styled';
import { MainTitle } from './MainTitle/MainTitle';
import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      alert('Already in list');
      return;
    }
    setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onInputChange = event => {
    setFilter({
      filter: event.currentTarget.value,
    });
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContact = filteredContacts();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainTitle title="Phonebook ☎" />
        <ContactForm onFormSubmit={onFormSubmit} />
        <Title title="Contacts 📞" />
        <Filter onInputChange={onInputChange} />
        <ContactList data={filteredContact} deleteContact={deleteContact} />
        <GlobalStyleComponent />
      </Container>
    </ThemeProvider>
  );
};
