import React from "react";
import ContactCard from "./ContactCard";
import contactData from "./contactData";

function FunctionApp() {
    const contactCardComponents = contactData.map(contact => (
        <ContactCard
            key={contact.id}
            contactCard={contact}
        />
    ));

    return (
        <div className="contacts">
            {contactCardComponents}
        </div>
    );
}

export default FunctionApp;