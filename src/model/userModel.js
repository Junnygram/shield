import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide a email'],
      unique: true,
    },
    // {
    //   timestamps: true,
    // },
    firstname: {
      type: String,
      required: [true, 'Please provide your firstname'],
    },
    lastname: {
      type: String,
      required: [true, 'Please provide your lastname'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      unique: true,
    },
    confirmpassword: {
      type: String,
      required: [true, 'Please provide a email'],
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  }
  // {
  //   timestamps: true,
  // }
);

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
