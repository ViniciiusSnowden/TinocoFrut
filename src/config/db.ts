
import { AppDataSource } from "../data-source"

export const conexaoDB = async () => AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
