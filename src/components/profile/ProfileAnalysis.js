export const getFilledContactsCount = (contacts) => {
    let contactsCount = 0;
    Object.keys(contacts).map( (key) => { if ((key) && contacts[key]) contactsCount++})
    return contactsCount;
}