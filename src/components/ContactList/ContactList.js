function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button
                    onClick={() => onDeleteContact(id)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;