import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'postgres',
  username: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'dev_db',
});

export default sequelize;
