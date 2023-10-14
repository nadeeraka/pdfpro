import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  id: string;
  email: string;
  //   password: string;
  //   isVerified: boolean;
  //   isAdmin: boolean;
  //   tokenExpire: Date;
}

const UserSchema: Schema = new mongoose.Schema({
  //   username: {
  //     type: String,
  //     required: [true, "Username is required"],
  //     unique: true,
  //     minlength: [3, "Username must be at least 3 characters long"],
  //     maxlength: [20, "Username must not exceed 20 characters"],
  //   },

  id: {
    type: String,
    unique: true,
    required: true,
  },

  given_name: {
    type: String,
    required: [true, "Username is required"],
    // unique: true,
  },
  family_name: {
    type: String,
    // required: [true, "Username is required"],
    // unique: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please fill a valid email address",
    ],
  },

  stripeCustomerId: String,
  stripeSubscriptionId: String,
  stripePriceId: String,
  stripeCurrentPeriodEnd: Date,
  //   password: {
  //     type: String,
  //     required: [true, "Password is required"],
  //     // minlength: [7, "Password must be at least 8 characters long"],
  //   },
  //   isVerified: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   isAdmin: {
  //     type: Boolean,
  //     default: false,
  //   },
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

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User;
