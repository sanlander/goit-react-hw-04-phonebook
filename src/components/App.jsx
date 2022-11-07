import { useState, useEffect } from 'react';
import { Box } from 'Box';
import { ContactsList, ContactForm, Filter } from '../components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const LS_KEY = 'contacts_of_LS';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const dateOfLocalStorage = localStorage.getItem(LS_KEY);
    return dateOfLocalStorage
      ? [...JSON.parse(localStorage.getItem(LS_KEY))]
      : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem(LS_KEY);
      return;
    }
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = newContact => {
    const newName = newContact.name.toLowerCase();

    if (contacts.find(({ name }) => newName === name.toLowerCase())) {
      Notify.warning(`${newContact.name} is already in contacts.`, {
        position: 'center-top',
      });
      return;
    }
    setContacts([newContact, ...contacts]);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDelete = idItems => {
    setContacts(contacts.filter(({ id }) => id !== idItems));
  };

  const contactsTotal = contacts.length;
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box p="24px">
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={handleFormSubmit} />
      <h2>Contacts</h2>
      {contactsTotal > 0 && (
        <>
          <Filter onChange={handleFilter} />
          <ContactsList
            contacts={visibleContacts}
            onClickDelete={handleDelete}
          />
        </>
      )}
    </Box>
  );
}
