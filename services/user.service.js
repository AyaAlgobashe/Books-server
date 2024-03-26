const user = require("../models/user.model");

const findUserService = async (email) => {
    try{
         return await user.findOne({ email }).exec();
    }
    catch(error){
        throw new Error("user not found")
            
        }
 
};

const getAllUsersService = async () =>{
  try{
  return await user.find();
  }
  catch(error){
      throw new Error("can not find any user")
          
      }
}
;

const createUserService = async ({ name, email, passwordHash }) => {
  try {
    return await user.create({ name, email, passwordHash });
  } catch (error) {
    console.log(error);
  }
};
const deleteUserService = async (email) => {
  try{
      await user.deleteOne({_email:email})
  }
  
  catch(error){
      throw new Error("This book not found")
          
      }
}
module.exports = {
  findUserService,
  getAllUsersService,
  createUserService,
  deleteUserService,
};
