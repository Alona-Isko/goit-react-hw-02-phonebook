function ContactList({ contacts }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button>X</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;