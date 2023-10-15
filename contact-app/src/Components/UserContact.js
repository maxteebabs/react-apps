const UserContact = ({contact, id}) => {
  const formatPhone = (phone) => {
    if(phone.length >= 8 && phone.length < 14) {
      return phone;
    }
    return "";
  }
  const isValidImage = (image) => {
    const regEx = /(https?:\/\/)*.(jpg|png)$/;
    return regEx.test(image);
  }

  return (
    <div id={id}>
      {isValidImage(contact.thumbnail) &&
      <img src={contact.thumbnail} alt={contact.name} />}
      <div>
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <span>{formatPhone(contact.phone)}</span>
      </div>
    </div>
  );
}

export default UserContact;