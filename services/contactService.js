export const sendContactForm = async (formData) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      // This error will be caught by the catch block in your ContactForm component
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    // Log the error for your internal tracking
    console.error("Contact Service Error:", error);
    throw error; 
  }
};