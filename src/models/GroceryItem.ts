import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class GroceryItem extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public stock!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

GroceryItem.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'GroceryItem',
  }
);

export default GroceryItem;
