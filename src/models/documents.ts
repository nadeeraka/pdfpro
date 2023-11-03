import mongoose, { Schema } from "mongoose";
import mongooseLong from "mongoose-long";

mongooseLong(mongoose);
const Long = mongoose.Schema.Types.Long;

const DocumentSchema: Schema = new mongoose.Schema({
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
  size: Number,
  // key: String,
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
  mongoose.models.document || mongoose.model("document", DocumentSchema);

export default Document;
