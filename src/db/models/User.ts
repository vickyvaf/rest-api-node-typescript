import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/dbConnect";

interface UserAttributes {
  id?: number;
  name?: string | null;
  email?: string | null;
  roleId?: number | null;
  password?: string | null;
  accessToken?: string | null;
  verified?: boolean | null;
  active?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public roleId!: number;
  public password!: string;
  public accessToken!: string;
  public verified!: boolean;
  public active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    roleId: {
      allowNull: true,
      type: DataTypes.BIGINT,
    },
    password: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    accessToken: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    verified: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    active: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
  },
  { sequelize: sequelizeConnection, timestamps: true, underscored: false }
);

export default User;
