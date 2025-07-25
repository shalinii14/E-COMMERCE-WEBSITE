import jwt from "jsonwebtoken"
import User from "../Modals/user.modal.js";



let auth = async (req,res,next) => {
  let token = req?.cookies?.Token;

  try{

    if(!token){
        return res.status(401).json({message: "You must be logged in to access this"})
    }

    let TokenData = jwt.verify(token, process.env.SECRET_KEY)

    if(!TokenData){
        return res.status(401).json({message: "Unauthorized"})
    }else{
        let userData = await User.findOne({email: TokenData.email});

        req.user = userData

        next()
    }

  }catch{
    return res.status(401).json({message: "Error 404"})
  }

  next();
}

export default auth
