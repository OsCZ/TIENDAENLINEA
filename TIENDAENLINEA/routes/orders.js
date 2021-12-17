const express = require('express');
const router = express.Router();
const permission = require('../middlewares/permission')

//Listar todas las ordenes


router.get('/', permission('admin'), async (req,res) =>{

const orders = await sequelize.models.orders.finAndCountAll();
return res.status(200).json({data: orders});

    
})

//Creacion de ordenes

router.post('/', permission('admin','client'), async (req,res) =>{
    const{body} = req;
    const order = await sequelize.models.orders.create({
    userId:body.userId,
    productId: body.productId,
    quantity: body.quantity,
    });
    
    await order.save();
    return res.status(201).json({data: order});
   
})

//Actulizacion de ordenes

router.put('/:id', permission('admin','client'), async (req,res) =>{
    const order = await sequelize.models.orders.findByPK(id);
    if(!order)
    {
     return res.status(404).json({code: 404, message: 'order not found'})   
    }
    const UpdatedOrder = await order.Update({
        userId:body.userId,
        productId: body.productId,
        quantity: body.quantity,
    });
    
    return res.json({data: UpdatedOrder})

    
})


//borrar una orden (id)

router.delete('/:id', permission('admin'), async (req,res) =>{
    const {params : { id }} = req;
    const order = await sequelize.models.orders.findByPK(id);
    if(!order)
    {
     return res.status(404).json({code: 404, message: 'order not found'})
    }
    await order.destroy();
    return res.json({message: 'order removed'});
    
    })
    


module.exports = router;