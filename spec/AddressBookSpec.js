/*global
AddressBook
Contact
 */

describe('AddressBook', function () {
  it('should be able to add a contact', function () {
    const addressBook = new AddressBook();
    const thisContact = new Contact();

    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});