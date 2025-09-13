const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//this if for redirection
export const checkMyTeacherForm = async (token) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/teacherform/check-teacher-form`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

export const createTeacherForm = async (formData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/teacherform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

// get my teacher for for submit
export const getTeacherForm = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/teacherform`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Network error occurred",
      status: error.status,
    };
  }
};
