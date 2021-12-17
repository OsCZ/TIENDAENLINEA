const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')


router.get('/', permission('admin','client'), async (req,res) =>{

const reviews = await sequelize.models.reviews.finAndCountAll();
return res.status(200).json({data: reviews});

})


router.post('/', permission('admin','client'), async (req,res) =>{
const{body} = req;
const reviews = await sequelize.models.reviews.create({
productoid: body.productoid,
content: body.content,
});

await reviews.save();

})


router.put('/:id', permission('admin','client'), async (req,res) =>{
const reviews = await sequelize.models.reviews.findByPK(id);
if(!reviews)
{
 return res.status(404).json({code: 404, message: 'review not found'})   
}
const Updatedreviews = await reviews.Update({
    content: body.content,
    });

return res.json({data: Updatedreviews})

})

router.delete('/:id', permission('admin','client'), async (req,res) =>{
const {params : { id }} = req;
const reviews = await sequelize.models.reviews.findByPK(id);
if(!reviews)
{
 return res.status(404).json({code: 404, message: 'review not found'})   
}
await reviews.destroy();
return res.json({ message: 'review removed'});

})





module.exports = router;