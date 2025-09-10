"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { getAllTeacher } from "@/service/adminService";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const userData = await getAllTeacher();
        console.log(userData, "check for user");
        setUsers(userData.data.users);
        setFilteredUsers(userData.data.users);
      } catch (err) {
        setError("Failed to load users. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    let result = users;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (user) =>
          user.fullName.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term) ||
          (user.description && user.description.toLowerCase().includes(term))
      );
    }

    // Apply role filter
    if (roleFilter !== "all") {
      result = result.filter((user) => user.role === roleFilter);
    }

    setFilteredUsers(result);
  }, [users, searchTerm, roleFilter]);

  // Sorting function
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading users...</div>
        <style jsx>{`
          .loading {
            text-align: center;
            padding: 2rem;
            font-size: 1.2rem;
            color: #6b7280;
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error">{error}</div>
        <style jsx>{`
          .error {
            color: #ef4444;
            text-align: center;
            padding: 2rem;
            font-size: 1.2rem;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Head>
        <title>User Dashboard</title>
      </Head>

      <h1>User Management Dashboard</h1>
      <p className="dashboard-subtitle">Manage all users in the system</p>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="role-filter">
          <label htmlFor="role-filter">Filter by role:</label>
          <select
            id="role-filter"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="student">Students</option>
            <option value="teacher">Teachers</option>
            <option value="parent">Parents</option>
          </select>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <span className="stat-number">{users.length}</span>
          <span className="stat-label">Total Users</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {users.filter((u) => u.role === "student").length}
          </span>
          <span className="stat-label">Students</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {users.filter((u) => u.role === "teacher").length}
          </span>
          <span className="stat-label">Teachers</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {users.filter((u) => u.role === "parent").length}
          </span>
          <span className="stat-label">Parents</span>
        </div>
      </div>

      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("fullName")}>
                Name{" "}
                {sortConfig.key === "fullName" && (
                  <span>
                    {sortConfig.direction === "ascending" ? "↑" : "↓"}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort("email")}>
                Email{" "}
                {sortConfig.key === "email" && (
                  <span>
                    {sortConfig.direction === "ascending" ? "↑" : "↓"}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort("role")}>
                Role{" "}
                {sortConfig.key === "role" && (
                  <span>
                    {sortConfig.direction === "ascending" ? "↑" : "↓"}
                  </span>
                )}
              </th>
              <th>Description</th>
              <th onClick={() => handleSort("createdAt")}>
                Joined{" "}
                {sortConfig.key === "createdAt" && (
                  <span>
                    {sortConfig.direction === "ascending" ? "↑" : "↓"}
                  </span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.length > 0 ? (
              sortedUsers.map((user) => (
                <tr key={user._id || user.email}>
                  <td>
                    <div className="user-info">
                      <div className="avatar">
                        {user.fullName.charAt(0).toUpperCase()}
                      </div>
                      <div className="name">{user.fullName}</div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge ${user.role}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="description">
                    {user.description || (
                      <span className="no-description">No description</span>
                    )}
                  </td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #1f2937;
          margin-bottom: 8px;
        }
        .dashboard-subtitle {
          color: #6b7280;
          margin-bottom: 24px;
        }
        .filters {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .search-box input {
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          width: 250px;
        }
        .role-filter {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .role-filter select {
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .stat-card {
          background: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          color: #3b82f6;
        }
        .stat-label {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .table-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .users-table {
          width: 100%;
          border-collapse: collapse;
        }
        .users-table th {
          background-color: #f9fafb;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
          cursor: pointer;
          user-select: none;
        }
        .users-table th:hover {
          background-color: #f3f4f6;
        }
        .users-table td {
          padding: 16px;
          border-bottom: 1px solid #f3f4f6;
        }
        .users-table tr:last-child td {
          border-bottom: none;
        }
        .users-table tr:hover {
          background-color: #f9fafb;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
        }
        .name {
          font-weight: 500;
          color: #1f2937;
        }
        .role-badge {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          text-transform: capitalize;
        }
        .role-badge.student {
          background-color: #dbeafe;
          color: #1e40af;
        }
        .role-badge.teacher {
          background-color: #fce7f3;
          color: #be185d;
        }
        .role-badge.parent {
          background-color: #dcfce7;
          color: #166534;
        }
        .description {
          color: #6b7280;
          max-width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .no-description {
          color: #9ca3af;
          font-style: italic;
        }
        .no-results {
          text-align: center;
          padding: 40px;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .filters {
            flex-direction: column;
          }
          .search-box input {
            width: 100%;
          }
          .table-container {
            overflow-x: auto;
          }
          .users-table {
            min-width: 700px;
          }
        }
      `}</style>
    </div>
  );
};

export default UserDashboard;
