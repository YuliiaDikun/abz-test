import React from "react";
import { formatPhoneNumber } from "../../services/formatPhoneNumber";
const User = ({ user }) => {
  const { email, name, phone, photo, position } = user;
  const properNumber = formatPhoneNumber(phone);
  console.log(properNumber);
  return (
    <li className="user_card">
      <div className="userpic_wrapper">
        <img className="userpic" src={photo} alt="userpic" />
      </div>
      <div className="user_desc">
        <p>{name}</p>
        <p>{position}</p>
        <p>{email}</p>
        <p>{properNumber}</p>
      </div>
    </li>
  );
};

export default User;
