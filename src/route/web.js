import express from "express";
import homeController, { getHomePage } from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) =>{
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:Id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.updateUser)
    return app.use('/', router)


}

export default initWebRoute