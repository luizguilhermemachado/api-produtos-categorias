import Produto from "../models/Produtos.js";

class ProdutoController {
  async index(req, res) {
    try {
      const produtos = await Produto.findAll({
        attributes: ['id', 'nome', 'descricao', 'preco', 'categoria_id'],
      });
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao listar Produtos'] });
    }
  }

  async store(req, res) {
    try {
      const newProduto = await Produto.create(req.body);
      //const { id, nome, descricao, preco, categoria_id } = newProduto;
      return res.json(newProduto);
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error?.errors?.map((err) => err.message) || ['Erro desconhecido'],
      });
    }
  }

  async show(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ errors: ['Produto não encontrado'] });
      }
      const { id, nome, descricao, preco, categoria_id } = Produto;
      return res.json({ id, nome, descricao, preco, categoria_id });
    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao buscar Produto'] });
    }
  }

  async update(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ errors: ['Produto não encontrada'] });
      }

      const { nome, descricao, preco } = req.body;
      await Produto.update({ nome, descricao, preco });

      const { id } = produto;
      return res.json({ id, nome: produto.nome, descricao: produto.descricao, preco: produto.preco });

    } catch (error) {
      return res.status(400).json({
        errors: error?.errors?.map((err) => err.message) || ['Erro ao atualizar Produto'],
      });
    }
  }

  async delete(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({
          errors: ['Produto não encontrada'],
        });
      }

      await produto.destroy();
      return res.json({ message: 'Produto deletada com sucesso' });

    } catch (error) {
      return res.status(500).json({ errors: ['Erro ao deletar Produto'] });
    }
  }

}

export default new ProdutoController();
