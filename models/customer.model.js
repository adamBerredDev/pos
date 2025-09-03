module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("Customer", {
        C_ID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            // get() {
            //     return 'myPrefix' + this.getDataValue('CustomerID').toString().padStart(6, '0');
            // }
        },
        C_Name : {
            type: Sequelize.STRING(64),
            allowNull: false
        },
        C_Email : {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
        C_Phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^\+[1-9]\d{1,14}$/ // validates that the phone number is in the international format +[country code][phone number]
            }
        },
        C_Address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        C_Password: {
            type: Sequelize.STRING,
            allowNull: false           
        },
        C_Username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        C_Status: {
            type: Sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'inactive'
        }
    });
    return Customer;
}