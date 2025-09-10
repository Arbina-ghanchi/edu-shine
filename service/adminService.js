const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/all-users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.error(error, "check for the error");
  }
};

export const getAllTeacher = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/all-teachers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.error(error, "check for the error");
  }
};
