import { connectDB } from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, phone, budget, message } = body;

    // 1️⃣ Save to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      phone,
      budget,
      message,
    });

    // 2️⃣ Send to Google Sheet (from .env)
    await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        budget,
        message,
      }),
    });

    return Response.json(
      { message: "Saved to MongoDB & Google Sheet", data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}
