import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default async (req, res, next) => {
  try {
    const {authorization} = req.headers

    if(!authorization){
      return res.status(401).json({error: ['Login required']})
    }
    console.log()
    const [, token] = authorization.split(' ')
    console.log(token)
    const dados = jwt.verify(token, process.env.TOKEN_SECRET)
    console.log(dados)
    req.userId = dados.id
    req.userEmail = dados.email

    const user = await User.findByPk(dados.id)

    if(!user){
      return res.status(401).json({
        errors: ['Usuário não encontrado']
      })
    }

    return next()

  } catch (error) {
    console.error('Erro na autenticação:', error.message);
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
}
