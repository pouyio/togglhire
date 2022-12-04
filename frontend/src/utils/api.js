const BASE_URL = "https://toggl-hire-frontend-homework.onrender.com";

export const ERROR_TYPES = {
  invalid_email_address: "invalid_email_address",
  send_failure: "send_failure",
};

export const sendEmails = async (emails) => {
  const response = await fetch(`${BASE_URL}/api/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emails }),
  });
  if (response.status === 200) {
    return { error: false };
  } else if (response.status === 422) {
    return response.json();
  } else if (response.status === 500) {
    return response.json();
  }
};
