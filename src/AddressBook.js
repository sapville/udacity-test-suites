class AddressBook { //eslint-disable-line no-unused-vars
  constructor () {
    this.initialComplete = false;
    this.contacts = [];
  }

  getInitialContacts (cb) {
    setTimeout(() => {
      this.initialComplete = true;
      if (cb) {return cb();}
    }, 10);
  }

  addContact (contact) {
    this.contacts.push(contact);
  }

  getContact (number) {
    return this.contacts[number];
  }

  deleteContact (number) {
    this.contacts.splice(number, 1);
  }
}