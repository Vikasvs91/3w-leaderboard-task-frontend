import React from "react";

const TopThreeUsers = ({ users }) => {
  const top = users.slice(0, 3);

  const medals = ["🥈", "🥇", "🥉"];
  const bgColors = [
    "bg-gradient-to-br from-gray-300 to-gray-100",     // 2nd place
    "bg-gradient-to-br from-yellow-400 to-yellow-200", // 1st place - center highlight
    "bg-gradient-to-br from-orange-300 to-orange-100"  // 3rd place
  ];

  // Arrange: 2nd (left), 1st (center), 3rd (right)
  const orderedTop = [top[1], top[0], top[2]];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-end gap-4 my-6 px-4">
      {orderedTop.map((u, idx) => {
        if (!u) return null;

        const isCenter = idx === 1;
        const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(u.name)}`;
        const sizeClass = isCenter ? "w-24 h-24 sm:w-32 sm:h-32" : "w-20 h-20 sm:w-28 sm:h-28";
        const textSize = isCenter ? "text-xl" : "text-lg";

        return (
          <div
            key={u._id}
            className={`w-full sm:w-1/3 max-w-sm p-4 sm:p-6 rounded-xl shadow-lg ${bgColors[idx]} text-center transition-transform duration-300 transform hover:scale-105 ${
              isCenter ? "scale-105 sm:scale-110 border-4 border-yellow-500 z-10" : "opacity-90"
            }`}
          >
            <div className="flex justify-center mb-2">
              <img
                src={avatarUrl}
                alt={u.name}
                className={`${sizeClass} rounded-full border-2 shadow-md ${isCenter ? "border-yellow-600" : "border-white"}`}
              />
            </div>
            <div className="text-3xl mb-1">{medals[idx]}</div>
            <div className={`${textSize} font-semibold text-gray-800`}>{u.name}</div>
            <div className="text-sm sm:text-base text-gray-700">{u.totalPoints} Points</div>
            {isCenter && <div className="mt-1 text-2xl">👑</div>}
          </div>
        );
      })}
    </div>
  );
};

export default TopThreeUsers;
