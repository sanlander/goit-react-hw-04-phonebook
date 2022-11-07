import { Component } from 'react';
import { Box } from 'Box';
import { ContactsList, ContactForm, Filter } from '../components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const LS_KEY = 'contacts_of_LS';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsOfLS = localStorage.getItem(LS_KEY);

    contactsOfLS &&
      this.setState({
        contacts: [...JSON.parse(contactsOfLS)],
      });
  }

  componentDidUpdate(pProps, pState) {
    if (pState.contacts.length !== this.state.contacts.length) {
      console.log('Update');
      if (this.state.contacts.length === 0) {
        localStorage.removeItem(LS_KEY);
        return;
      }
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = newContact => {
    const newName = newContact.name.toLocaleLowerCase();

    if (
      this.state.contacts.find(
        ({ name }) => newName === name.toLocaleLowerCase()
      )
    ) {
      Notify.warning(`${newContact.name} is already in contacts.`, {
        position: 'center-top',
      });
      return;
    }

    this.setState({
      contacts: [newContact, ...this.state.contacts],
    });
  };

  handleFilter = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleDelete = idItems => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idItems),
    }));
  };

  render() {
    const { contacts } = this.state;
    const contactsTotal = contacts.length;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box p="24px">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleFormSubmit} />
        <h2>Contacts</h2>
        {contactsTotal > 0 && (
          <>
            <Filter onChange={this.handleFilter} />
            <ContactsList
              contacts={visibleContacts}
              onClickDelete={this.handleDelete}
            />
          </>
        )}
      </Box>
    );
  }
}
