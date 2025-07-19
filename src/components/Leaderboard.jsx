import React, { useEffect, useState } from "react";
import { API } from "../api";
import TopThreeUsers from "./TopThreeUsers";
import LeaderboardList from "./LeaderboardList";

const Leaderboard = ({ refresh }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/claim/leaderboard").then(res => setUsers(res.data));
  }, [refresh]);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">🏆 Leaderboard</h2>
      <TopThreeUsers users={users} />
      <LeaderboardList users={users} />
    </div>
  );
};

export default Leaderboard;
