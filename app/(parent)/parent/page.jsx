"use client";
import ParentForm from "@/components/common/forms/parentform";
import { Studentform } from "@/components/common/forms/studentform";
import { useAuth } from "@/context/AuthContext";

const page = () => {
  const { user } = useAuth();
  const type = "parent";

  return <div>{user?.role === "parent" && <ParentForm />} </div>;
};

export default page;
