import mongoose, { Schema } from "mongoose";
import User from "./users";

const DocumentSchema: Schema = new mongoose.Schema({
  id: Schema.Types.UUID,
  name: String,
  uploadStatus: {
    type: String,
    enum: ["PENDING", "PROCESSING", "FAILED", "SUCCESS"],
    default: "PENDING",
  },
  url: String,
  key: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  user_id: String,
});

// UserSchema.post("save", function (error: any, doc: any, next: any): any {
//   if (error.name === "MongoError" && error.code === 11000) {
//     next(new Error("Username or email already exists"));
//   } else if (error.name === "ValidationError") {
//     next(new Error(error.message));
//   } else {
//     next(error);
//   }
// });

const Document =
  mongoose.models.user || mongoose.model("document", DocumentSchema);

export default Document;
