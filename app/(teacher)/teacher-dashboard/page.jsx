"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getTeacherForm } from "@/service/teacherFormService";
import {
  getStudentDashboard,
  getTeacherDashboard,
} from "@/service/teacherDashboardService";

// Import all the new components
import Sidebar from "@/components/TeacherDashboard/Sidebar";
import Header from "@/components/TeacherDashboard/Header";
import OverviewTab from "@/components/TeacherDashboard/OverviewTab";
import StudentsTab from "@/components/TeacherDashboard/StudentsTab";
import AssignmentsTab from "@/components/TeacherDashboard/AssignmentsTab";
import ClassesTab from "@/components/TeacherDashboard/ClassesTab";
import CalendarTab from "@/components/TeacherDashboard/CalendarTab";
import MessagesTab from "@/components/TeacherDashboard/MessagesTab";
import SettingsTab from "@/components/TeacherDashboard/SettingsTab";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedClass, setSelectedClass] = useState(" ");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const [classes, setClasses] = useState([]);
  const { user: teacher, token } = useAuth();
  const [myForm, setMyForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchMyForm = async () => {
      setLoading(true);
      try {
        const response = await getTeacherForm(token);

        if (response && response.success && response.data) {
          const formData = response.data;
          const hasFormData = formData && Object.keys(formData).length > 0;

          if (hasFormData) {
            setMyForm(formData);
          } else {
            if (teacher?.role === "teacher") {
              router.push("/teacher");
            }
          }
        } else {
          if (teacher?.role === "teacher") {
            router.push("/teacher");
          }
        }
      } catch (error) {
        console.error("Error fetching teacher form:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token && teacher?.role === "teacher") {
      fetchMyForm();
    }
  }, [token, teacher, router]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        const response = await getTeacherDashboard(token);
        setClasses(response?.data);
        setSelectedClass(response?.data[0]);
      } catch (error) {
        console.error("Error fetching teacher dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [token]);

  useEffect(() => {
    const fetchDashboards = async () => {
      try {
        if (!selectedClass) return; // use selected subject/class
        const response = await getStudentDashboard(selectedClass, token);
        setStudents(response?.data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchDashboards();
  }, [token, selectedClass]); // depend on selectedClass instead of classes

  const renderContent = () => {
    switch (activeTab) {
      case "students":
        return (
          <StudentsTab
            classes={classes}
            selectedClass={selectedClass}
            students={students?.students}
          />
        );
      case "assignments":
        return <AssignmentsTab />;
      case "classes":
        return <ClassesTab classes={classes} />;
      case "calendar":
        return <CalendarTab />;
      case "messages":
        return <MessagesTab />;
      case "settings":
        return <SettingsTab user={teacher} />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />

      <div
        className={`${
          isMobile ? "ml-0" : "md:ml-64"
        } flex flex-col min-h-screen`}
      >
        <Header
          activeTab={activeTab}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          classes={classes}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isMobile={isMobile}
          user={teacher}
        />

        <main className="flex-1 p-4 md:p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
