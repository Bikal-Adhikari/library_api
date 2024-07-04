import UserSchema from "./UserSchema.js";

export const createNewUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

export const updateUser = async (filter, obj) => {
  return await UserSchema.findOneAndUpdate(filter, obj);
};
export const updateUserbyId = async (_id, obj) => {
  return await UserSchema.findByIdAndUpdate(_id, obj);
};

export const getAllStudents = async () => {
  try {
    // Assuming 'role' field distinguishes between 'student' and 'admin'
    return await UserSchema.find({ role: "student" });
  } catch (error) {
    throw error;
  }
};
