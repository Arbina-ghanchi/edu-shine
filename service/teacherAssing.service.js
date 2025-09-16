const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createAssignmentTeacher = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/assign/assignments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Network error occurred",
      status: error.status,
    };
  }
};
export const getAssignmentTeacher = async (teacherId, subject) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/assign/assignments?teacherId=${teacherId}&subject=${subject}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Network error occurred",
      status: error.status,
    };
  }
};
