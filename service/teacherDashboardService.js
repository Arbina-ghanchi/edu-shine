const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// get all the subject teacher teaches
export const getTeacherDashboard = async (token) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/teacher-dashboard/get-subjects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.json();
  } catch (error) {
    console.error(error, "check for the error");
  }
};

// get all the student that teacher teaches
export const getStudentDashboard = async (subjects, token) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/teacher-dashboard/assign-teacher?subjects=${subjects}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.json();
  } catch (error) {
    console.error(error, "check for the error");
  }
};
