// client/src/App.jsx
import './index.css';
import React, { useState } from "react";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [selectedUser, setSelectedUser] = useState("");
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleRefresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-500">
      <h1 className="text-2xl font-bold text-center">Leaderboard Task</h1>
      <div className="flex justify-center items-center space-x-2 my-4">
        <UserSelector
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          refreshUsers={handleRefresh}
        />
        <ClaimButton selectedUser={selectedUser} onClaim={handleRefresh} />
      </div>
      <Leaderboard refresh={refreshFlag} />
    </div>
  );
}

export default App;
