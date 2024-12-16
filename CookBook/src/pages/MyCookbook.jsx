import React, { useState, useEffect } from "react";

function MyCookbook() {
  const [activeTab, setActiveTab] = useState("Collections");
  const [user, setUser] = useState(null); // To store user data
  const [myPosts, setMyPosts] = useState([]); // To store posts created by the user
  const [savedPosts, setSavedPosts] = useState([]); // To store posts saved by the user
  const [followers, setFollowers] = useState(0); // To store followers count
  const [following, setFollowing] = useState(0); // To store following count

  // Get user data, posts, and saved posts from the API
  useEffect(() => {
    // Replace with the actual user ID
    const userID = 1; 

    // Fetch user data
    fetch(`/api/users/${userID}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    // Fetch posts created by the user
    fetch(`/api/posts?userID=${userID}`)
      .then((response) => response.json())
      .then((data) => setMyPosts(data));

    // Fetch saved posts
    fetch(`/api/saved-posts/${userID}`)
      .then((response) => response.json())
      .then((data) => setSavedPosts(data));

    // Fetch follower and following count
    fetch(`/api/follow/${userID}/followers`)
      .then((response) => response.json())
      .then((data) => setFollowers(data.length));

    fetch(`/api/follow/${userID}/following`)
      .then((response) => response.json())
      .then((data) => setFollowing(data.length));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 font-sans bg-gray-100">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-6" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "40px" }}>
        Create, Explore, & Share Recipes all Around the World
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        {/* Profile Picture */}
        <img
          src={user?.profilePicture || "https://via.placeholder.com/100"} // Dynamic profile picture
          alt={user?.firstName || "User"}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        {/* Profile Details */}
        <h2 className="text-xl font-semibold">{user?.firstName} {user?.lastName}</h2>
        <div className="flex space-x-4 mt-2">
          <p>{followers} Followers</p>
          <p>{following} Following</p>
        </div>
        <p className="mt-4 text-center text-sm">
          {user?.bio || "No bio available"}
        </p>
        <a href={user?.website || "#"} className="text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">
          {user?.website || "No website"}
        </a>
        <p className="text-sm mt-1">The place where kitchen meet.</p>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex justify-center space-x-6">
          <button
            className={`px-4 py-2 ${activeTab === "Collections" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
            onClick={() => handleTabClick("Collections")}
          >
            Collections
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "Activity" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
            onClick={() => handleTabClick("Activity")}
          >
            Activity
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "Collections" ? (
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 - MY POSTS */}
          <div
            className="bg-white p-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => alert("WAPA NA IMPLEMENT!")}
          >
            <h3 className="font-semibold mb-2">MY POSTS</h3>
            <div className="grid grid-cols-2 gap-2">
              {myPosts.length > 0 ? (
                myPosts.map((post) => (
                  <img
                    key={post.postID}
                    src={post.image || "https://via.placeholder.com/150"}
                    alt={post.postHeader}
                    className="w-full h-auto rounded"
                  />
                ))
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>

          {/* Card 2 - SAVED POSTS */}
          <div
            className="bg-white p-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => alert("Post clicked!")}
          >
            <h3 className="font-semibold mb-2">SAVED POSTS</h3>
            <div className="grid grid-cols-2 gap-2">
              {savedPosts.length > 0 ? (
                savedPosts.map((post) => (
                  <img
                    key={post.postID}
                    src={post.image || "https://via.placeholder.com/150"}
                    alt={post.postHeader}
                    className="w-full h-auto rounded"
                  />
                ))
              ) : (
                <p>No saved posts available.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-sm">
              <strong>David Laid</strong> commented on your post "Delicious Ramen Recipe".
            </p>
            <span className="text-gray-500 text-xs">2 hours ago</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-sm">
              <strong>John Doe</strong> liked your post "Keto Avocado Salad".
            </p>
            <span className="text-gray-500 text-xs">5 hours ago</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p className="text-sm">
              <strong>Sarah Smith</strong> started following you.
            </p>
            <span className="text-gray-500 text-xs">1 day ago</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCookbook;
