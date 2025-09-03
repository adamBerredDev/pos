module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("Category", {
        Cat_Name : {
            type: Sequelize.STRING(64),
            allowNull: false,
            primaryKey: true
        },
        Cat_Description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Category;
}