/*global
AddressBook
Contact
 */

describe('AddressBook', function () {

  let addressBook;
  let thisContact;

  beforeEach(function () {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function () {
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function () {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });

});

describe('Address Book Async', function () {
  let addressBook;

  beforeEach(function (done) {
    addressBook = new AddressBook();
    addressBook.getInitialContacts(done);
    /*
        addressBook.getInitialContacts(function () {
          done();
        });
    */
  });

  it('should download initial content of Address Book', function (done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
