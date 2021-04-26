const bcrypt = require('bcryptjs');
const { Usuario,sequelize } = require('../models');

const usuariosController = {
    index: async (req, res) => {
        const usuarios =  await Usuario.findAll();
        
        return res.render('usuarios', { listaUsuarios: usuarios});
    
},

registro: (request, response) => {
    return response.render('registro');
},

create: async(req, res) =>{
    let dadosUsuarios = req.body;
    let novoUsuario = await Usuario.create({
        nome: dadosUsuarios.nome,
        email: dadosUsuarios.email,
        senha: dadosUsuarios.senha
    })
    return res.json(novoUsuario);
},

update: async (req, res) => {
    let {id} = req.params;
    let dadosAtualizados = req.body;
    let atualizado = await Usuario.update({
        nome: dadosAtualizados.nome
    
    }, {
        where: {id:id}

    })
    return res.json(atualizado);
},

delete: async (req, res) => {
    const {id} = req.params;
    const usuario = await Usuario.destroy({
        where: {id:id}

    });
    return res.json(usuario);
}

}

module.exports = usuariosController;