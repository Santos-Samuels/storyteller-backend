import dotenv from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { Role } from "../entities/role";
import { User } from "../entities/user";

dotenv.config({ path: ".env" });

const {
  POSTGRESQL_HOST,
  POSTGRESQL_PORT,
  POSTGRESQL_USER,
  POSTGRESQL_PASSWORD,
  POSTGRESQL_DATABASE,
  NODE_ENV,
} = process.env;

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: POSTGRESQL_HOST,
  port: Number(POSTGRESQL_PORT) ?? 5432,
  username: POSTGRESQL_USER,
  password: POSTGRESQL_PASSWORD,
  database: POSTGRESQL_DATABASE,
  synchronize: NODE_ENV === "development" ? true : false,
  // logging: false,
  entities: [Role, User],
  migrations: ["src/infra/database/type-orm/migrations/*.js"],
};

export const dataSource = new DataSource(dataSourceOptions);

export const initializeDatabase = async () => {
  try {
    await dataSource.initialize();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

// export default dataSource;
