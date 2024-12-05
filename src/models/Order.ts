import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';   

class Order extends Model {
  public id!: number;
  public userId!: number;   
  public totalPrice!: number;
  public status!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,   
      allowNull: false,
      references: {
        model: User,   
        key: 'id',
      },
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    tableName: 'Orders',
    timestamps: true,
  }
);

export default Order;
