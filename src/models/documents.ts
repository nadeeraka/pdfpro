import mongoose, { Schema } from "mongoose";
import User from "./users";

const DocumentSchema: Schema = new mongoose.Schema({
  // id   String @id @default(cuid())
  // name String

  // uploadStatus UploadStatus @default(PENDING)

  // url      String
  // key      String
  // messages Message[]

  // createdAt DateTime @default(now())
  // updatedAt DateTime @updatedAt
  // User      User?    @relation(fields: [userId], references: [id])
  // userId    String?

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
  user: User,
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
