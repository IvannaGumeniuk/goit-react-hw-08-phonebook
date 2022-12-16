import Notiflix from 'notiflix';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsOperations, ContactsSelectors } from 'redux/contacts';
import styles from './ContactForm.module.css';

export default function ContactForm() {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

   const contacts = useSelector(ContactsSelectors.getContacts);
   const isRefreshing = useSelector(ContactsSelectors.getIsRefreshing);
   const dispatch = useDispatch();

   const onSubmitForm = event => {
      event.preventDefault();
      if (
         contacts.find(
            contact =>
               contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
         )
      ) {
         Notiflix.Notify.warning(`Subscriber ${name} is alredy in your contacts`);
         return;
      }
      dispatch(ContactsOperations.addContact({ name, number }));
      setName('');
      setNumber('');
   };

   return (
      <form className={styles.form} onSubmit={onSubmitForm}>
         <label className={styles.label}>
            Name
            <input
               onChange={event => setName(event.target.value)}
               type="text"
               name="name"
               value={name}
               placeholder="Name Lastname"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces"
               required
            />
         </label>
         <label className={styles.label}>
            Number
            <input
               onChange={event => setNumber(event.target.value)}
               type="tel"
               name="number"
               value={number}
               placeholder="XXX-XX-XX"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces"
               required
            />
         </label>
         <div>
            <button className={styles.btn} type="submit" disabled={isRefreshing}>
               Add new subscriber
            </button>
         </div>
      </form>
   );
}