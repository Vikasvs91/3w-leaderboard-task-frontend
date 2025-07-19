// client/src/components/ClaimButton.jsx
import React from "react";
import { API } from "../api";

const ClaimButton = ({ selectedUser, onClaim }) => {
  const handleClaim = async () => {
    if (!selectedUser) {
      alert("Select a user first!");
      return;
    }
    try {
      const res = await API.post(`/claim/${selectedUser}`);
      alert(`You got ${res.data.randomPoints} points!`);
      onClaim(); // refresh leaderboard
    } catch (e) {
      console.error(e);
      alert("Error claiming points");
    }
  };

  return <button onClick={handleClaim} className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-200 active:scale-95">Claim Reward</button>;
};

export default ClaimButton;
