import { table } from "console";
import { DataTypes } from "sequelize";
import { Table, Column, Model } from "sequelize-typescript";
import { string } from "yup";

@Table
export default class Client extends Model<Client> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  client_id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: { msg: "Name cannot be empty" },
      len: {
        args: [2, 255],
        msg: "Name must be between 2 and 50 characters",
      },
    },
  })
  username: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: "Email cannot be empty" },
      isEmail: { msg: "Invalid format" },
    },
  })
  email: string;


@Column({
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
  validate: {
    notEmpty: { msg: "Password cannot be empty" },
    len:{
      args: [8,255],
      msg:'Password must be between 8 and 255 characters',
    }
  },
})
password: string;


}