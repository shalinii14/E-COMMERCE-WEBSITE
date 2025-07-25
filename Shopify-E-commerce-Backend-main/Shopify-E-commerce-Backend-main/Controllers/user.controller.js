import User from "../Modals/user.modal.js";

let cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none"
}


const signUp = async (req,res) => {
  let {email} = req.body;

  try{
    let existingUser = await User.findOne({email: email})

    if(existingUser){
        return res.status(400).json({result: false , message: "Email already exists"})
    }

    let newUser = User(req.body)
    let token = await newUser.generateToken();

    let savedUser = await newUser.save()

    return res.cookie("Token", token, cookieOptions).send({result: true, message: "User SuccessFully Created", data: savedUser})

  }catch(err){
    res.status(500).json({result: false ,message: err.message})
  }
}

const login = async (req,res) => {
  let {email, password} = req.body;

  try{
    let existingUser = await User.findOne({email: email})

    if(!existingUser){
      return res.status(400).json({result: false , message: "Email does not exist"});
    }
    else{
      let checkPassword = await existingUser.comparePassword(password)
  
      if(checkPassword){
        let token = await existingUser.generateToken()
  
        return res.cookie("Token", token, cookieOptions).send({result: true, message: "Login Successfully", data: existingUser})
  
      }else{
        return res.status(500).json({result: false, message: "Incorrect Password"})
      }
    }

  }catch(err){
    res.status(500).json({result: false, message: err.message})
  }
}

const logout = (req,res) => {
  if(!req?.user){
    return res.status(401).json({result: false, message: "Unauthorized"})
  }else{
    try{
      return res.clearCookie("Token", cookieOptions).send({result: true, message: "Logout Successfully"})

    }catch(err){
      res.status(500).send({result: false, message: err.message})
    }
  }
}

const getUser = (req,res) => {
  if(!req?.user){
    return res.status(401).json({result: false, message: "Unauthorized"})
  }else{
    return res.json({result: true, message: "User Found", data: req.user})
  }
}

const updateUser = async (req,res) => {
  if(!req?.user){
    return res.status(401).send({result: false, message: "Unauthorized"})
  }else{
    try{
      let userData = req.user;
      let oldData = req.body
      let updatedData = await User.findByIdAndUpdate(userData._id, oldData, {new: true});
      return res.send({result: true, message: "User Updated", data: updatedData})
    }catch(err){
      res.status(401).send({result: false, message: "error"});
    }
  }
}

const replaceUser = async (req,res) => {
  if(!req?.user){
    return res.status(401).json({result: false, message: "Unauthorized"})
  }else{
    try{
      let userData = req.user;
      let oldData = req.body
      let replacedData = await User.findOneAndReplace({_id: userData._id},  oldData, {new: true});
      return res.json({result: true, message: "User Replaced", data: replacedData})

    }catch(err){
      res.status(500).json({result: false, message: err.message})
    }
  }
}

const deleteUser = async (req,res) => {
  if(!req?.user){
    return res.status(401).send({result: false, message: "Unauthorized"})
  }else{
    try{
      let userData = req.user;
      let deletedData = await User.findByIdAndDelete(userData._id);
      return res.clearCookie("Token").send({result: true, message: "User Deleted", data: deletedData})

    }catch(err){
      res.status(500).send({result: false, message: err.message})
    }
  }
}




export {signUp, login, logout, getUser, updateUser, replaceUser, deleteUser}