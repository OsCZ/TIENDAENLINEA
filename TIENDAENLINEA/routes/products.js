const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')


router.get('/', permission('admin','client'), async (req,res) =>{

const products = await sequelize.models.products.fina();
return res.status(200).json({data: products});

})


//body-parse
router.post('/', permission('admin'), async (req,res) =>{
const{body} = req;
const products = await sequelize.models.products.create({
name: body.name,
description: body.description,
price: body.price,
image: body.image
});

await products.save();

})


router.put('/:id', permission('admin'), async (req,res) =>{
const products = await sequelize.models.products.findByPK(id);
if(!products)
{
 return res.status(404).json({code: 404, message: 'Product not found'})   
}
const Updatedproducts = await products.Update({
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image
    });

return res.json({data: Updatedproducts})

})

router.delete('/:id', permission('admin'), async (req,res) =>{
const {params : { id }} = req;
const products = await sequelize.models.products.findByPK(id);
if(!products)
{
 return res.status(404).json({code: 404, message: 'Product not found'})   
}
await products.destroy();
return res.json({message: 'Product removed'});

})





module.exports = router;