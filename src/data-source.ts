import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "paulo",
    database: "tonico",
    synchronize: true,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
    subscribers: [],
})

console.log(`App conectado ao BD ${AppDataSource.options.database}`);

process.on('SIGINT', () => {
    AppDataSource.close().then(() => console.log('Conexão com o BD fechada'));
});