import React from "react";

const LeaderboardList = ({ users }) => {
  return (
    <div className="mt-6 space-y-2">
      {users.slice(3).map((u, idx) => {
        const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(
          u.name
        )}`;

        return (
          <div
            key={u._id}
            className="flex justify-between items-center bg-white hover:bg-gray-100 border border-gray-200 rounded-md px-4 py-2 shadow-sm transition duration-200"
          >
            <span className="font-semibold text-gray-600 w-6">{idx + 4}.</span>

            {/* Avatar + Name */}
            <div className="flex items-center gap-3 flex-1 ml-4 truncate">
              <img
                src={avatarUrl}
                alt={u.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
              />
              <span className="text-gray-800 font-medium truncate">{u.name}</span>
            </div>

            <span className="text-blue-600 font-bold">{u.totalPoints}</span>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderboardList;
