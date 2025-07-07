import User from "../models/User.js";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao listar usuários'] });
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error?.errors?.map((err) => err.message) || ['Erro desconhecido'],
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao buscar usuário'] });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }

      const { nome, email, password } = req.body;
      await user.update({ nome, email, password });

      const { id } = user;
      return res.json({ id, nome: user.nome, email: user.email });
    } catch (error) {
      return res.status(400).json({
        errors: error?.errors?.map((err) => err.message) || ['Erro ao atualizar usuário'],
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao deletar usuário'] });
    }
  }
}

export default new UserController();
