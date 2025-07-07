import User from "../models/User.js";
import jwt from 'jsonwebtoken'

class Token{
  async store(req, res){
    try {
      const {email= '', password = ''} = req.body
      if(!email || !password){
        return res.status(401).json({error: ['Credenciais inválidas']})
      }

      const user = await User.findOne({where: {email}})

      if(!user){
        return res.status(401).json({error: ['Usuário inválido']})
      }

      if(!(await user.passwordValidate(password))){
        return res.status(401).json({error: ['Senha inválida']})
      }

      const {id} = user

      const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_SESSION || '7d'})

      return res.json(token)

    } catch (error) {
      return res.status(500).json({error: ['Erro interno']})
    }

  }
}

export default new Token()
