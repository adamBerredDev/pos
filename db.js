const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'inventorydb',
    'adam_lingerie',
    'Ghfe625HZhfjHhefe525GGHeHHYefe854Hbhzbd3#{4422GHeztfERTYrt',
     {
       host: '168.231.84.153',
       dialect: 'mysql'
     }
   );
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db
