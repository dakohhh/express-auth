import mongoose, { Schema } from "mongoose";

export const AbstractUserSchema: Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      match: [/^[a-zA-Z0-9@.+-_]+$/, "Username is invalid"],
      maxlength: 150,
    },

    firstname: {
      type: String,
      required: [true, "First Name is required"],
      maxlength: 150,
    },

    lastname: { type: String, required: [true, "Last Name is required"] },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    password: { type: String, required: true },

    is_staff: { type: Boolean, default: false },

    is_superuser: { type: Boolean, required: true, default: false },

    date_joined: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
