import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsSelectors, ContactsOperations } from 'redux/contacts';
import ContactItem from './ContactItem/ContactItem';
import styles from './ContactList.module.css';

export default function ContactList({ filter }) {
   const contacts = useSelector(ContactsSelectors.getContacts);
   const isLoading = useSelector(ContactsSelectors.getIsLoading);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(ContactsOperations.fetchContacts());
   }, [dispatch]);

   const getVisibleContacts =
      contacts &&
      contacts.filter(contact =>
         contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
   return (
      <div>
         {isLoading ? (
            <h2>Loading...</h2>
         ) : getVisibleContacts?.length ? (
            <ul className={styles.list}>
               {getVisibleContacts.map(({ id, name, number }) => (
                  <ContactItem key={id} id={id} name={name} number={number} />
               ))}
            </ul>
         ) : (
            <h2>No subscribers</h2>
         )}
      </div>
   );
}
