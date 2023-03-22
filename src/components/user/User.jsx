import React from "react";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
const User = ({ user }) => {
  const { email, name, phone, photo, position } = user;
  const properNumber = formatPhoneNumber(phone);  
  return (
    <li className="user_card">
      <div className="userpic_wrapper">
        <img className="userpic" src={photo} alt="userpic" />
      </div>
      <div className="user_desc">
        <p className="user_name">{name}</p>
        <p className="text">{position}</p>
        <p className="text">{email}</p>
        <p className="text">{properNumber}</p>
      </div>
    </li>
  );
};

export default User;
