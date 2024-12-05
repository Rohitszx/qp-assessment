import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import GroceryItem from './GroceryItem';
import Order from './Order';

class OrderItem extends Model {
  public id!: number;
  public orderId!: number;
  public groceryItemId!: number;
  public quantity!: number;
  public price!: number;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: 'id',
      },
    },
    groceryItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GroceryItem,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'OrderItem',
  }
);

export default OrderItem;
