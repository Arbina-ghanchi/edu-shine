"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { id: "all", label: "All Users", path: "/admin" },
    { id: "teacher", label: "Teachers", path: "/teachers" },
    { id: "student", label: "Students", path: "/students" },
    { id: "parent", label: "Parents", path: "/parents" },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="admin-container">
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button
            className="toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className="nav-item"
                  onClick={() => handleNavigation(item.path)}
                >
                  <span className="nav-icon">
                    {item.id === "all" && "👥"}
                    {item.id === "teacher" && "👨‍🏫"}
                    {item.id === "student" && "🎓"}
                    {item.id === "parent" && "👪"}
                  </span>
                  {isSidebarOpen && (
                    <span className="nav-label">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {isSidebarOpen && (
          <div className="sidebar-footer">
            <p>Admin Dashboard v1.0</p>
          </div>
        )}
      </aside>

      {/* Main content */}
      <main className="admin-content">{children}</main>

      <style jsx>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          background-color: #f5f5f5;
        }

        .sidebar {
          width: ${isSidebarOpen ? "250px" : "70px"};
          background: #1f2937;
          color: white;
          transition: width 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .sidebar-header {
          padding: 1.5rem 1rem;
          display: flex;
          justify-content: ${isSidebarOpen ? "space-between" : "center"};
          align-items: center;
          border-bottom: 1px solid #374151;
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 1.2rem;
          display: ${isSidebarOpen ? "block" : "none"};
        }

        .toggle-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0.25rem;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0;
        }

        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-nav li {
          margin-bottom: 0.5rem;
        }

        .nav-item {
          width: 100%;
          background: none;
          border: none;
          color: #d1d5db;
          padding: 0.75rem 1rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background-color 0.2s;
        }

        .nav-item:hover {
          background-color: #374151;
          color: white;
        }

        .nav-icon {
          font-size: 1.2rem;
          margin-right: ${isSidebarOpen ? "0.75rem" : "0"};
        }

        .nav-label {
          display: ${isSidebarOpen ? "block" : "none"};
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid #374151;
          text-align: center;
          font-size: 0.8rem;
          color: #9ca3af;
        }

        .admin-content {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            height: 100%;
            z-index: 100;
            left: ${isSidebarOpen ? "0" : "-70px"};
          }

          .admin-content {
            margin-left: ${isSidebarOpen ? "70px" : "0"};
            transition: margin-left 0.3s ease;
          }
        }
      `}</style>
    </div>
  );
}
