import React, { useState } from "react";

const WishlistPage = () => {
  const [numItems, setNumItems] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notification, setNotification] = useState("");

  const categories = ["Food", "Clothes", "Electronics", "Health & Medical", "Others"];

  const handleWishlistChange = (index, key, value) => {
    const newWishlist = [...wishlist];
    newWishlist[index] = { ...newWishlist[index], [key]: value };
    setWishlist(newWishlist);
  };

  const handleUpload = () => {
    if (wishlist.length === 0 || wishlist.some(item => !item.name || !item.category)) {
      alert("Please fill out all fields.");
      return;
    }

    const newUser = { id: wishlists.length + 1, name: `User ${wishlists.length + 1}`, wishlist };
    setWishlists([...wishlists, newUser]);

    setNotification("Wishlist uploaded successfully!");
    setWishlist([]);
    setNumItems(1);

    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="wishlist-container">
      <h2>Wishlist Page</h2>

      {/* Wishlist Form */}
      <div className="wishlist-form">
        <label>Number of items:</label>
        <input
          type="number"
          value={numItems}
          onChange={(e) => setNumItems(Number(e.target.value))}
          min="1"
        />
        {Array.from({ length: numItems }).map((_, index) => (
          <div key={index} className="wishlist-item">
            <input
              type="text"
              placeholder="Item name"
              onChange={(e) => handleWishlistChange(index, "name", e.target.value)}
            />
            <select onChange={(e) => handleWishlistChange(index, "category", e.target.value)}>
              <option value="">Select Category</option>
              {categories.map((category, i) => (
                <option key={i} value={category}>{category}</option>
              ))}
            </select>
          </div>
        ))}
        <button onClick={handleUpload}>Upload Wishlist</button>
      </div>

      {/* Success Notification */}
      {notification && <div className="notification">{notification}</div>}

      {/* Wishlist Accounts Section */}
      <div className="wishlist-accounts">
        <h3>Accounts with Wishlists</h3>
        {wishlists.length > 0 ? (
          <ul>
            {wishlists.map((user) => (
              <li key={user.id} onClick={() => setSelectedUser(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No wishlists uploaded yet.</p>
        )}
      </div>

      {/* Display Selected Wishlist */}
      {selectedUser && (
        <div className="wishlist-display">
          <h3>{selectedUser.name}'s Wishlist</h3>
          <ul>
            {selectedUser.wishlist.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.category}
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
