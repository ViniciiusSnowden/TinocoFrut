import { UsuarioController } from "../controller/UsuarioController";
import { AppDataSource } from "../data-source"
import { Usuario } from "../entity/Usuario"



export const conexaoDB = async () => AppDataSource.initialize().then(async () => {

        const usuarioCtrl = new UsuarioController();

        console.log("Inserting a new user into the database...")
        const user = new Usuario("Timber", "timber@mail.com", "A")
        console.log(usuarioCtrl.recuperarAtualizarPorId({id: 50, nome: "Alan", email: null}));
        

        await AppDataSource.manager.save(user)
        console.log("Saved a new user with id: " + user.id)

        console.log("Loading users from the database...")
        const users = await AppDataSource.manager.find(Usuario)
        console.log("Loaded users: ", users)


        console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
