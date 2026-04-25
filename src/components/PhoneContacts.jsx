import { Component } from "react";
import styles from "./PhoneContact.module.css";

class PhoneContacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <li className={styles.contactItem} key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default PhoneContacts;
