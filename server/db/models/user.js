import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const {
  Types: { ObjectId },
} = Schema;

export const userSchema = Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  role: { type: ObjectId, ref: 'Role', required: true },
  active: { type: Boolean, default: true },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema, 'Users');

export default User;
