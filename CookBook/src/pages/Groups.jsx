import React, { useState } from "react";

function GroupsPage() {
  const totalGroups = 50; // Dynamically update this based on group count.

  // Sample group data
  const allGroups = Array.from({ length: totalGroups }).map((_, idx) => ({
    id: idx + 1,
    name: `Group Name ${idx + 1}`,
    creator: `Creator ${idx + 1}`,
    members: Math.floor(Math.random() * 500) + 1,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("My Groups");
  const [filteredGroups, setFilteredGroups] = useState(allGroups);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter groups based on search term
    const filtered = allGroups.filter((group) =>
      group.name.toLowerCase().includes(value)
    );
    setFilteredGroups(filtered);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 font-sans bg-gray-100">
      {/* "50 Groups" Display */}
      <div className="flex justify-between items-center mb-4">
        <span
          className="text-lg"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <span className="font-bold text-black">{filteredGroups.length}</span>{" "}
          <span className="text-red-600 font-semibold">Groups</span>
        </span>
        <button
          onClick={() => alert("tsaa")}
          className="flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-red-700 transition"
        >
          <span>+</span>
          <span>New Group</span>
        </button>
      </div>

      {/* Search Panel */}
      <div className="flex justify-between items-center bg-white p-4 rounded-full shadow-md w-full max-w-4xl mx-auto mb-6">
        <div className="flex items-center bg-gray-100 p-3 rounded-full flex-grow">
          <input
            type="text"
            placeholder="Search Groups"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-transparent outline-none w-full text-gray-600 placeholder-gray-400 rounded-full px-2"
          />
        </div>
      </div>

      {/* "Find Your Community" Section */}
      <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-2">Find Your Community on CookBook</h2>
        <p className="text-gray-600">
          CookBook is your go-to community for food lovers of all levels, from beginner cooks to seasoned chefs. 
          Discover groups that share your passion, whether it’s exploring global flavors or perfecting local dishes. 
          Connect, learn, and grow alongside others who share your love for creativity in the kitchen. Together, we 
          make cooking more enjoyable, inspiring, and unforgettable.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex justify-center space-x-6">
          <button
            className={`px-4 py-2 ${
              activeTab === "My Groups"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("My Groups")}
          >
            My Groups
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "Discover Groups"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Discover Groups")}
          >
            Discover Groups
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg cursor-pointer"
          >
            <img
              src="https://via.placeholder.com/60"
              alt="Group Avatar"
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="text-sm font-semibold">{group.name}</h3>
            <p className="text-xs text-gray-500">{group.creator}</p>
            <div className="flex justify-between items-center mt-4 w-full">
              <span className="text-xs text-gray-500">{group.members} Members</span>
              <button className="text-red-600 text-xs font-semibold">
                View Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupsPage;
