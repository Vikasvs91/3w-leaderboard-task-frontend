import React, { useEffect, useState } from "react";
import { API } from "../api";

const UserSelector = ({ selectedUser, setSelectedUser, refreshUsers }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    API.get("/users").then(res => setUsers(res.data));
  }, [refreshUsers]);

  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    await API.post("/users", { name: newUser });
    setNewUser("");
    refreshUsers();
  };

  return (
    <div className="mb-6 p-6 bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-4">
      <div className="flex flex-col">
        <label htmlFor="userSelect" className="mb-1 font-semibold text-gray-700">Select User</label>
        <select
          id="userSelect"
          value={selectedUser}
          onChange={e => setSelectedUser(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">-- Choose a user --</option>
          {users.map(u => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="New User"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UserSelector;
