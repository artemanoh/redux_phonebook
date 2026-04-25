import { Component } from 'react';
import './App.css';
import PhoneContacts from './components/PhoneContacts';
import PhoneInput from './components/PhoneInput';
import { nanoid } from 'nanoid';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: '',
    name: '',
    isLoading: true,
    number: ''
  }

  componentDidMount() {
    setTimeout(() => {
        const localContacts = localStorage.getItem("contacts")
  if (localContacts) {
   const parcedLocalContacts = JSON.parse(localContacts)
    this.setState({contacts: parcedLocalContacts, isLoading: false})
  } else {
    this.setState({ isLoading: false})
  }
    }, 100)

}

componentDidUpdate(prevProps, prevState) {
 if (prevState.contacts !== this.state.contacts) {
  localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
 }
}

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  };



  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleDeleteContact = (id) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id)
    }));
  }

  handleAddContact = (name, number) => {
    const isDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )

    if (isDuplicate) {
      alert(`Contact ${name} is already in contacts!`)
      return;
    }
    const newContact = { id: nanoid(), name, number };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  render() {
    const normalisedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalisedFilter));
      if(this.state.isLoading === true) {
    return( <div className="App">
        <h1>Phonebook</h1>
        <PhoneInput onAddContact={this.handleAddContact} />
       <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
         <h2>Loading...</h2>
      </div>
      )
  }
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <PhoneInput onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <PhoneContacts contacts={filteredContacts}  onDeleteContact={this.handleDeleteContact}  />
      </div>
    );
  }
}
// тяжко тяжко:(
export default App;
