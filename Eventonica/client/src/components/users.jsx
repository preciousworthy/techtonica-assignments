import React from 'react';
import { useState } from 'react';
import DeleteUser from './DeleteUser';

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };


const Users = () => {
  const [users, setUsers] = useState([marlin, nemo, dory]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");


//Submit handler is responsible for adding new user to user management
//AND it resets the input fields after the button is pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    setUsers([...users, newUser]);

    setName("");
    setId("");
    setEmail("");
  }

  const handleDeleteUser = (DeleteUser) => {
    //filtered users
  const deleteUsers = users.filter((user) => user.id !== DeleteUser);
  setUsers(deleteUsers)
  }
  return (
  
  <section className="user-management">
    <h2>User Management</h2>

    <ul id="users-list">
    {users.map((user, index) => {
      return (
        <li key={index}>
          Id: {user.id}, Name: {user.name}, Email: {user.email}
        </li>
      )
    })};
    </ul>

    <div>
              <h3>Add User</h3>
              <form id="add-user" onSubmit={handleSubmit}>
                <fieldset>
                  <label> Id: </label>
                  <input type="number" id="add-user-id" value={id} onChange={(e) => setId(e.target.value)} />
                  <br />
                  <label> Name: </label>
                  <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)} />
                  <br />
                  <label> Email: </label>
                  <input type="text" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" value="Add" />
              </form>
            </div>

            <DeleteUser handleDeleteUser={handleDeleteUser}/>
  </section>
)};


export default Users;