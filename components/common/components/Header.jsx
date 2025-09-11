"use client";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    router.push("/auth");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="book-logo">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            className="app-name cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            EduShine
          </span>
        </div>

        {isAuthenticated && (
          <div className="profile-section" ref={dropdownRef}>
            <div
              className="profile-button"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={
                  user?.avatar ||
                  `https://picsum.photos/200?random=${Math.random()}`
                }
                loading="lazy"
                alt="Profile"
                className="profile-avatar"
              />
              <span className="profile-name">{user?.fullName || "User"}</span>
            </div>

            {isDropdownOpen && (
              <div
                className="dropdown-menu"
                onMouseLeave={() => setIsDropdownOpen(false)}
                onClick={(e) => router.push("/")}
              >
                <div className="dropdown-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 20C6 17.3478 7.05357 14.8043 8.92893 12.9289C10.8043 11.0536 13.3478 10 16 10C18.6522 10 21.1957 11.0536 23.0711 12.9289C24.9464 14.8043 26 17.3478 26 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Profile</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .header {
          background-color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 0 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, sans-serif;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          height: 64px;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .book-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
        }

        .app-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
        }

        .profile-section {
          position: relative;
        }

        .profile-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .profile-button:hover {
          background-color: #f3f4f6;
        }

        .profile-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #e5e7eb;
        }

        .profile-name {
          font-weight: 500;
          color: #374151;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
          min-width: 200px;
          margin-top: 0.5rem;
          overflow: hidden;
          z-index: 1001;
          border: 1px solid #e5e7eb;
          animation: fadeIn 0.2s ease-out;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          color: #374151;
          cursor: pointer;
          transition: background-color 0.2s;
          font-size: 0.95rem;
        }

        .dropdown-item:hover {
          background-color: #f9fafb;
          color: #3b82f6;
        }

        .dropdown-item svg {
          color: #6b7280;
        }

        .dropdown-item:hover svg {
          color: #3b82f6;
        }

        .dropdown-divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 0.25rem 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .profile-name {
            display: none;
          }

          .app-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
