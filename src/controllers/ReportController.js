const User = require('../model/User');
const {Op} = require('sequelize')
module.exports = {
    async show(req,res)
    {
        // Encontrar todos os usuarios q tenham email e termina @rocketseat.como
        // desses usuarios encontrar todos q moram na rua guilherme
        // Desses usuarios buscar technologiais q comecam com React

        const users = await User.findAll({
            attributes: ['name','email'],
           include:[
               {association:'addresses',where:{street:'Guilherme gembalo'}},
               {association:'techs',where:{name:'React'}},
           ]
        });

        return res.json(users)
    }
}