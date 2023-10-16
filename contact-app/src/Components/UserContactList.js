import UserContact from "./UserContact";
const UserContactList = ({ listId, contactList }) => {
  return (
    <>
      {
        contactList.map((contact, index) =>
          <div id={contact.id+index} key={contact.id+index} className="contact">
            <UserContact key={contact.id} page={listId} contact={contact}>
            </UserContact>
          </div>
        )
      }
    </>
  );
}

export default UserContactList;