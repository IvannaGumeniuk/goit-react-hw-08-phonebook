import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import UserMenu from 'components/UserMenu/UserMenu';
import Container from 'components/Container/Container';

export default function Home() {
   const [filter, setFilter] = useState('');

   return (
      <Container>
         <UserMenu />
         <h1>Phonebook</h1>
         <ContactForm />
         <h2>Contacts</h2>
         <Filter filter={filter} onChange={setFilter} />
         <ContactList filter={filter} />
      </Container>
   );
}