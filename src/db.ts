import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3310,
    username: "root",
    password: "12345",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})