import UserContact from "./UserContact";
const UserContactList = ({ listId, contactList }) => {
  return (
    <>
      {
        contactList.length ?
        <div className="contact-list">
          {
            contactList.map((contact, index) =>
              <div key={contact.id+index} className="contact" data-testid="user-contact-list-wrapper">
                <UserContact id={contact.id+index} key={contact.id} page={listId} contact={contact}>
                </UserContact>
              </div>
            )
          }
        </div>
        : null
      }
    </>
  );
}

export default UserContactList;