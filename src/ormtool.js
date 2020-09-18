const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    database: 'sample',
    username: 'postgres',
    host: '127.0.0.1',
    port: '5432',
    password: 'root',
    dialect: 'postgres'

});

sequelize

    .authenticate()

    .then(() => {

        console.log('Connection has been established successfully.');

    })

    .catch(err => {

        console.error('Unable to connect to the database:', err);

    });

const User = sequelize.define('Maha', {

    // attributes

    firstName: {

        type: Sequelize.STRING,

        allowNull: false

    },

    lastName: {

        type: Sequelize.STRING

        // allowNull defaults to true

    }

}, {

        // options

    });

User.sync({ force: false })

