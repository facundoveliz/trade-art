import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "trade-art.sqlite",
});

export default sequelize;
