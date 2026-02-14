import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, // Added to keep data clean
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    budget: {
      type: String,
      required: true,
      // Synced exactly with your frontend array
      enum: [
        "₹10,000 - ₹50,000",
        "₹50,000 - ₹1,50,000",
        "₹1,50,000 - ₹5,00,000",
        "₹5,00,000+",
        "Budget not Defined yet", 
      ],
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// This ensures we don't overwrite the model if it's already compiled in Next.js
export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);