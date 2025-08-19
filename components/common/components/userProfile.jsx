// components/UserProfile.js
import { useState, useEffect } from "react";
import { authService } from "../services/authService";

const UserProfile = ({ token }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  const fetchUserProfile = async (authToken) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authService.getProfile(authToken);

      if (response.success) {
        setUserData(response.data);
      } else {
        setError(response.error.message || "Failed to fetch profile");
        console.error("Profile fetch error:", response.error);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Unexpected error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-error">
        <p>Error: {error}</p>
        <button onClick={() => fetchUserProfile(token)}>Try Again</button>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="profile-empty">
        <p>No user data available</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          src={userData.avatar || "/default-avatar.png"}
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">
          {userData.firstName} {userData.lastName}
        </h2>
        <p className="profile-email">{userData.email}</p>
      </div>

      <div className="profile-details">
        <h3>Profile Details</h3>
        <div className="detail-item">
          <span className="detail-label">Username:</span>
          <span className="detail-value">{userData.username}</span>
        </div>
        {userData.phone && (
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{userData.phone}</span>
          </div>
        )}
        {userData.bio && (
          <div className="detail-item">
            <span className="detail-label">Bio:</span>
            <span className="detail-value">{userData.bio}</span>
          </div>
        )}
        <div className="detail-item">
          <span className="detail-label">Member since:</span>
          <span className="detail-value">
            {new Date(userData.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <style jsx>{`
        .user-profile {
          max-width: 600px;
          margin: 2rem auto;
          padding: 1.5rem;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .profile-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
          border: 3px solid #f0f0f0;
        }

        .profile-name {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .profile-email {
          margin: 0;
          color: #777;
        }

        .profile-details {
          border-top: 1px solid #eee;
          padding-top: 1.5rem;
        }

        .profile-details h3 {
          margin-top: 0;
          color: #333;
        }

        .detail-item {
          display: flex;
          margin-bottom: 0.75rem;
          padding: 0.5rem 0;
        }

        .detail-label {
          font-weight: 600;
          color: #555;
          min-width: 120px;
        }

        .detail-value {
          color: #333;
        }

        .profile-loading,
        .profile-error,
        .profile-empty {
          text-align: center;
          padding: 2rem;
          color: #777;
        }

        .loading-spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #0070f3;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .profile-error button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .profile-error button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default UserProfile;
