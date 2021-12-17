const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')

router.get('/',permission('admin'), async (req,res) =>{

        const users = await sequelize.models.users.finAndCountAll();
        return res.status(200).json({data: users});
                
        })

 router.post('/',permission('admin'), async (req,res) =>{
            const{body} = req;
            const user = await sequelize.models.users.create({
            name: body.name,
            lastname: body.lastname,
            type: body.type,
            email: body.email,
            password: body.password
        
        });
            
            await user.save();
            return res.status(201).json({data: user});
           
        })
            

router.put('/:id',permission('admin'), async (req,res) =>{
            const user = await sequelize.models.users.findByPK(id);
            if(!user)
            {
             return res.status(404).json({code: 404, message: 'user not found'})   
            }
            const UpdatedUser = await user.Update({
                name: body.name,
                lastname: body.lastname,
                type: body.type,
                email: body.email,
                password: body.password
            });
            
            return res.json({data: UpdatedUser})
                    
           })



router.delete('/:id',permission('admin'), async (req,res) =>{
        const {params : { id }} = req;
        const users = await sequelize.models.users.findByPK(id);
        if(!users)
        {
         return res.status(404).json({code: 404, message: 'review not found'})   
        }
        
        await users.destroy();
        return res.json({ message: 'users removed'});        
        })




module.exports = router;