import React from "react"

function ContactCard(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.contactCard.imgUrl} />
            <h3>{props.contactCard.name}</h3>
            <p>Phone: {props.contactCard.phone}</p>
            <p style={{ display: props.contactCard.email ? "block" : "none" }}>Email: {props.contactCard.email}</p>
        </div>
    )
}

export default ContactCard