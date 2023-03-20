import React from "react";
import User from "../user/User";

const Users = ({ users, isNextPageExists, setPage }) => {
  return (
    <section className="users_section">
      <div className="container">
        <h2 className="title">Working with GET request</h2>
        <ul className="user_list">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>

        <button
          type="button"
          disabled={!{ isNextPageExists }}
          className="btn"
          aria-label="show more user button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Show more
        </button>
      </div>
    </section>
  );
};

export default Users;
