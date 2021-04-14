const { Post } = require('../models');
const postsController = {
    index: async (req, res) => {
        let posts =  await Post.findAll();
        return res.json(posts);
    
},
create: async (req, res) =>{
    let dadosPosts = req.body;
    let novoPost = await Post.create({
        texto: dadosPosts.texto,
        img: dadosPosts.img,
        usuarios_id: dadosPosts.usuarios_id,
        n_likes: dadosPosts.n_likes
    })
    return res.json(novoPost);
},

update: async (req, res) => {
    let {id} = req.params;
    let dadosAtualizados = req.body;
    let atualizado = await Post.update({
        usuarios_id: dadosAtualizados.usuarios_id
    //    email: dadosAtualizados.email,
    //     senha: dadosAtualizados.senha

    }, {
        where: {id:id}

    })
    return res.json(atualizado);
},

delete: async (req, res) => {
    const {id} = req.params;
    const post = await Post.destroy({
        where: {id:id}

    });
    return res.json(post);
},
show: async(req,res) =>{
    const {id} = req.params;
    let mostrartudo = await Post.findAll({
        where: {
            usuarios_id: id
        }
    })
    return res.json(mostrartudo)
}


}
module.exports = postsController;