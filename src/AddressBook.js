/*global
Contact
 */

class AddressBook {
  constructor () {
    this.contacts = [];
  }
  addContact (contact) {
    this.contacts.push(contact);
  }
  getContact(number) {
    return this.contacts[number];
  }
}