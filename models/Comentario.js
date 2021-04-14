module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define(
        'Comentario', {
            texto: DataTypes.STRING,
            usuario: DataTypes.INTEGER,
            post_id:DataTypes.INTEGER
        },{
            tableName: "comentarios",
            timestamps: false
        }
    );
Comentario.associate = (models) => {
    
    Comentario.belongsTo(models.Post, { as: "posts", foreignKey: "posts_id"});
         
    }
       
    return Comentario
}
