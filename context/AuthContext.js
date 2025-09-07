"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ add router
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check for existing auth data on app load
    const savedToken = Cookies.get("token");
    const savedUser = Cookies.get("user");

    if (savedToken && savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setToken(savedToken);
      setUser(parsedUser);

      // 🔥 auto-redirect on app load based on role
      if (parsedUser?.role === "teacher") {
        router.push("/teacher-dashboard");
      } else {
        router.push("/dashboard");
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    // Set cookies with expiration (7 days)
    Cookies.set("token", authToken, { expires: 7 });
    Cookies.set("user", JSON.stringify(userData), { expires: 7 });

    setUser(userData);
    setToken(authToken);

    // 🔥 redirect immediately after login
    if (userData?.role === "teacher") {
      router.push("/teacher-dashboard");
    } else {
      router.push("/dashboard");
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    loading,
    isAuthenticated: !!user && !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
