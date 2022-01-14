import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

function verifyToken(req, res, next) {
  const token = req.header('auth-token')
  if(!token){
    return res.status(401).json({msg: 'Authorization denied'})
  }

  try{
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch(err){
    res.status(400).json({msg: 'Invalid token'})
  }
}

export default verifyToken;