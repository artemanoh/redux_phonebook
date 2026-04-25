import { Component } from "react";
import styles from './PhoneInput.module.css';

class PhoneInput extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.phoneForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я]+)*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          placeholder="Enter name"
          className={styles.inputField}
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitBtn}>Add contact</button>
      </form>
    );
  }
}

export default PhoneInput;
