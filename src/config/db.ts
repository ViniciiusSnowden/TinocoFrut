//import { conectarServidorNoBD } from './db';
// import { createConnection } from 'typeorm';

// export const conectarServidorNoBD = async () => {
//     const conexao = await createConnection();
//     console.log(`App conectado ao BD ${conexao.options.database}`);

//     process.on('SIGINT', () => {
//         conexao.close().then(() => console.log('Conexão com o BD fechada'));
//     });
// };

import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario"


export const conexaoDB = async () => AppDataSource.initialize().then(async () => {
        console.log("Inserting a new user into the database...")
        const user = new Usuario("Timber", "timber@mail.com", "A")

        await AppDataSource.manager.save(user)
        console.log("Saved a new user with id: " + user.id)

        console.log("Loading users from the database...")
        const users = await AppDataSource.manager.find(Usuario)
        console.log("Loaded users: ", users)

         await  AppDataSource.manager.createQueryBuilder().delete().from(Usuario).where("id = :id", { id: users[0].id }).execute();

         const usarrr = await AppDataSource.manager.findOne(Usuario ,{
                where: {
                    id: 7
                }
            });
         console.log(usarrr)

        console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
