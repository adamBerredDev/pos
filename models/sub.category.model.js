module.exports = (sequelize, Sequelize) => {
    const SubCategory = sequelize.define("SubCategory", {
        SubCat_Name : {
            type: Sequelize.STRING(255),
            allowNull: false,
            primaryKey: true
        },
        SubCat_Description: {
            type: Sequelize.STRING,
            allowNull: false
            
        }
    });
    return SubCategory;
}