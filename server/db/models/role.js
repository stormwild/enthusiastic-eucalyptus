import mongoose, { Schema } from 'mongoose';

export const roleSchema = Schema({
  name: { type: String, required: true, unique: true, index: true },
});

const Role = mongoose.model('Role', roleSchema, 'Roles');

export default Role;
