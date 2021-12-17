const express = require('express');
const app = express();
const helmet =require('helmet');
const cors =require('cors');




//app.get('/', (req,res)=> res.json({ message: 'Welcome to  express' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuracion basica helmet

//investigar para el entregable
app.use(helmet())
app.use(cors())


app.use('/api',require('./routes'));

app.listen(3001,() =>{
console.log(`Express a port 3001`);
});


//investigar helmet y cors

//helmet
//El módulo Helmet.js es muy útil para los desarrolladores de Node.js ya que agrega seguridad a las aplicaciones express.


//CORS 
//Significa Cross-Origin Resource Sharing, y es una política a nivel de navegador web que se aplica para prevenir que el dominio A evite 
//acceder a recursos del dominio B usando solicitudes del tipo AJAX como cuando usamos fetch() o XMLHttpRequest.


 //Usuario type Cliente y Admin 
 //REgistro y login == Seguridad
 //Productos 
 //Reseñas
 //Ordenes de compras

 //Rutas Models




