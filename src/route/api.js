import express from "express";
import apiController from '../controller/apiController'
let router = express.Router();

const initApiRoute = (app) =>{
    router.get('/users', apiController.getAllUser) // method GET -> READ data
    router.post('/create-user', apiController.createNewUser) // method POST => CREATE data, 
    router.put('/update-user', apiController.updateUser) //method PUT => update data
    router.delete('/delete-user/:id', apiController.deleteUser) //method DELETE => delete data

    return app.use('/api/v1', router)

}

export default initApiRoute