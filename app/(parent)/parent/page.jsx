import ParentForm from "@/components/common/forms/parentform";
import { Studentform } from "@/components/common/forms/studentform";

const page = () => {
  const type = "parent";

  return <div>{type === "parent" ? <ParentForm /> : <Studentform />}</div>;
};

export default page;
