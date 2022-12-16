import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsOperations, ContactsSelectors } from 'redux/contacts';
import styles from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
   const [changeName, setChangeName] = useState(name);
   const [changeNumber, setChangeNumber] = useState(number);
   const [changeContact, setChangeContact] = useState(false);
   const contacts = useSelector(ContactsSelectors.getContacts);
   const dispatch = useDispatch();

   const handelChengeContact = () => {
      if (changeContact) {
         if (name === changeName && number === changeNumber) {
            setChangeContact(!changeContact);
            return;
         }
         if (
            contacts.find(
               contact =>
                  contact.name.toLocaleLowerCase() ===
                     changeName.toLocaleLowerCase() && contact.id !== id
            )
         ) {
            Notiflix.Notify.warning(`Subscriber ${changeName} is alredy in contacts`);
            return;
         }
         dispatch(
            ContactsOperations.changeContact({
               id,
               name: changeName,
               number: changeNumber,
            })
         );
      }
   setChangeContact(!changeContact);
   };

   return (
      <li className={styles.item} id={id}>
         {changeContact ? (
            <>
               <input
                  className={styles.input}
                  type="name"
                  name="name"
                  value={changeName}
                  placeholder="Name Lastname"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={e => setChangeName(e.target.value)}
               />
               
               <input
                  className={styles.input}
                  type="tel"
                  name="number"
                  value={changeNumber}
                  placeholder="XXX-XX-XX"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={e => setChangeNumber(e.target.value)}
               />
            </>
         ) : (
            <>
               <span className={styles.name}>{name}: </span>
               <span>{number}</span>
            </>
         )}
         <div>
            {/* <div className={styles.BlockButtons}> */}
            <div>
               <button className={styles.btn} type="button" onClick={handelChengeContact}>
                  {changeContact ? 'Save' : 'Edit'}
               </button>
            </div>
            <div>
               <button className={styles.btn}
                  type="button"
                  onClick={() => dispatch(ContactsOperations.deleteContact(id))}
               >
                  Delete
               </button>
            </div>
         </div>
      </li>
   );
}