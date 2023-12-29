import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "127.0.0.1",
    port: 3310,
    username: "root",
    password: "12345",
    database: "typeorm",
    entities: [],
})