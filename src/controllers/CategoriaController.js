import Categoria from "../models/Categorias.js";

class CategoriaController {
  async index(req, res) {
    try {
      const Categorias = await Categoria.findAll({
        attributes: ['id', 'nome', 'descricao'],
      });
      return res.json(Categorias);
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao listar categorias'] });
    }
  }

  async store(req, res) {
    try {
      const newCategoria = await Categoria.create(req.body);
      const { id, nome, descricao } = newCategoria;
      return res.json({ id, nome, descricao });
    } catch (error) {
      return res.status(400).json({
        errors: error?.errors?.map((err) => err.message) || ['Erro desconhecido'],
      });
    }
  }

  async show(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) {
        return res.status(404).json({ errors: ['Categoria não encontrado'] });
      }
      const { id, nome, descricao } = categoria;
      return res.json({ id, nome, descricao });
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao buscar categoria'] });
    }
  }

  async update(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) {
        return res.status(404).json({ errors: ['Categoria não encontrada'] });
      }

      const { nome, descricao } = req.body;
      await categoria.update({ nome, descricao });

      const { id } = categoria;
      return res.json({ id, nome: categoria.nome, descricao: categoria.descricao });

    } catch (error) {
      return res.status(400).json({
        errors: error?.errors?.map((err) => err.message) || ['Erro ao atualizar categoria'],
      });
    }
  }

  async delete(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) {
        return res.status(404).json({
          errors: ['Categoria não encontrada'],
        });
      }

      await categoria.destroy();
      return res.json({ message: 'Categoria deletada com sucesso' });

    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao deletar categoria'] });
    }
  }

}

export default new CategoriaController();
