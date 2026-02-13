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
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    budget: {
      type: String,
      required: true,
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

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
