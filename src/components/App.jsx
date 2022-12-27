import { Component } from 'react';

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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.setState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFormSubmit = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };
    const isAtList = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (isAtList) {
      alert('Already in list');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onInputChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <MainTitle title="Phonebook ☎" />
          <ContactForm onFormSubmit={this.onFormSubmit} btnText="Create" />
          <Title title="Contacts 📞" />
          <Filter onInputChange={this.onInputChange} />
          <ContactList
            data={filteredContacts}
            deleteContact={this.deleteContact}
          />
          <GlobalStyleComponent />
        </Container>
      </ThemeProvider>
    );
  }
}
