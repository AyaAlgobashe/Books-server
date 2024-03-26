const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getAllUsersService,
  createUserService,
  findUserService,
  deleteUserService,
 
} = require("../services/user.service");
const {validateUser} = require("../validators/user.validatopr");



const getAllUsers=async (req, res) => {
    try{
        const user = await getAllUsersService();
    res.send(user);
    }
    catch (error) {
       console.log(error)
      }
    
  };
  
  const getUserEmail =async (req, res) => {
    const { email } = req.params;
    const user = await findUserService(email);
    if (!user)
      return res.status(404).send("The user with given  doesn't exist");
    res.send(user);
  };

const createNewUser = async (req, res) => {
   
    try {
  const { name, email, password } = req.body;
  if (!email || !password)
    return res.status(422).send("Wrong email or passwrod! ");
  const user = await findUserService(email);
  if (user)
    return res.send(
      "This email is already exist, please choose another email.."
    );

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await createUserService({ name, email, passwordHash });
  const { error } = validateUser( name, email, password);

  res.send(newUser);
    }
    catch (error) {
        res.status(500).send({ errorMessage: 'Internal Server Error' });
      
      }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(422).send("Wrong email or passwrod! ");

    const user = await findUserService(email);
    if (!user) return res.status(401).send("Incorrect email or password");

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword)
      return res.status(401).send({ message: "Incorrect email or password" });
    
    const token = jwt.sign({ email }, "myjwtsecret", { expiresIn: "1h" });
    console.log(token);
    res
      .header({ jwt: token })
      .send({ token: token, message: "access granted" });
  } catch (userLoginError) {
    res.status(500).send(userLoginError.message);
  }
};

const deleteUser =async (req, res) => {
  try{
  const {email} = req.params;
  const user = await deleteUserService(email);
  if (!user)
    return res.status(404).send("The user with given ID doesn't exist");
    deleteUserService(email);
  res.send("user deleted sucessfully");
  }
  catch (error) {
    res.status(500).send(error);
  
  }
};
module.exports = {
  getAllUsers,
  getUserEmail,
  createNewUser,
  login,
  deleteUser
};
