import React from 'react';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';




function GroupCard({ name, title, location, phone, email }) {

    return (

        <div className="card-container">
            <div className="card-intro text-color">
                <h2>{name}</h2>
                <h3>{title}</h3>
            </div>
            <hr />
            <div className="card-contact">
                <ul>
                    <li><FaMapMarkerAlt /> <a rel="noopener noreferrer" target="_blank" href={`https://www.google.com/maps/place/${location}`}>{location} Rock Studio</a></li>
                    <li><FaPhoneAlt /> <a href={`tel:${phone}`}>{phone}</a></li>
                    <li><FaEnvelope /> <a href={`mailto:${email}`}>Send Email</a></li>
                </ul>
            </div>
        </div>

    )
}


export default GroupCard;