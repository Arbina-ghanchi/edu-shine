"use client";
import { useState } from "react";
import {
  User,
  GraduationCap,
  Users,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const Page = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const roles = [
    {
      id: "teacher",
      title: "Teacher",
      description: "Manage classes and student progress",
      icon: GraduationCap,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      id: "student",
      title: "Student",
      description: "Access courses and assignments",
      icon: User,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      id: "parent",
      title: "Parent",
      description: "Monitor child's academic progress",
      icon: Users,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      role: selectedRole,
      mode: authMode,
      data: formData,
    });
    // Handle authentication logic here
  };

  const resetToRoleSelection = () => {
    setSelectedRole(null);
    setAuthMode("login");
    setFormData({ email: "", password: "", confirmPassword: "", fullName: "" });
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to EduPortal
            </h1>
            <p className="text-xl text-gray-300">
              Choose your role to continue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`${role.color} ${role.hoverColor} rounded-2xl p-8 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors">
                      <IconComponent size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
                    <p className="text-white/80 leading-relaxed">
                      {role.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium group-hover:bg-white/30 transition-colors">
                        Select {role.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const selectedRoleData = roles.find((role) => role.id === selectedRole);
  const IconComponent = selectedRoleData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={resetToRoleSelection}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to role selection
            </button>

            <div
              className={`inline-flex items-center justify-center w-16 h-16 ${selectedRoleData.color} rounded-full mb-4`}
            >
              <IconComponent size={32} className="text-white" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {authMode === "login" ? "Sign In" : "Sign Up"} as{" "}
              {selectedRoleData.title}
            </h2>
            <p className="text-gray-300">
              {authMode === "login" ? "Welcome back!" : "Create your account"}
            </p>
          </div>

          {/* Auth Mode Toggle */}
          <div className="flex bg-white/10 rounded-lg p-1 mb-6">
            <button
              onClick={() => setAuthMode("login")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                authMode === "login"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                authMode === "signup"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {authMode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {authMode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              className={`w-full py-3 px-4 ${selectedRoleData.color} ${selectedRoleData.hoverColor} text-white font-medium rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30`}
            >
              {authMode === "login" ? "Sign In" : "Create Account"}
            </button>
          </div>

          {authMode === "login" && (
            <div className="text-center mt-6">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Forgot your password?
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
