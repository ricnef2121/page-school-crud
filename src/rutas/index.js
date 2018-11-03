//volvemos a importar express por que necesitamos uno de sus modulos
const express = require('express');
//Router sirve para crear multiples rutas y mantenerlas 
//en archivos separados
//la siguiente constante es el encargado de crear las rutas
const router = express.Router();



/**routes */
//cuando te pidan algo, la ruta inicial del servidor
//manejalo a traves de una funcion
//en este caso la respuesta es un hello world
/*
app.get('/', (req, res) => {
        res.send('Hello World');
    })
    */
/**
 * Ahora lo que haremos es que mande un html como respuesta,
 * y en este caso debemos de usar la propiedad senFile  por
 * que es un archivo html lo qie mandaremos en la url, hay dos formas
 * de indicar donde se encutra el archivo que deseamos mandar
 * una es la ruta completa:
 * C:\Users\Alambredepuas3\Desktop\page-school-crud\src\vistas\index.hml
 * 
 * y la segunda es  atraves de la constante __dirname
 */


/**RECOMENDACION:
 * usar modulo path para evitar problemas por el uso de barra lateral,
 * o barra ivertida, con el modulo path.join hacemos que se 
 * adapte nuestra ruta al tipo de sistema que los va ejecutar sea
 * linux o windows por ejemplo.
 * 
 * //primero declaramos la constante path
 * y su valor sera require('path')
 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/vistas/index.html'));
})
*/
/**ahora como hemos modificado el motor de plantilla para
 * que sea a traves de ejs, lo que tenemos que hacer
 * es que cuando nos pidan algo, al momento de responder ya no
 * sera enviando un archivo como se hace con el res.senFile(),
 * si no que ahora utilizaremos el modulo res.render(), debido
 * a que como estaremos utilizando la extension de archivo .ejs,
 * se tiene que manejar con un render.
 * Antes de ello en la parte de settings o configuracion debemos 
 * de indicar la ruta donde esta guardado nuestro index.ejs
 
app.get('/', (req, res) => {
    res.render('index', { title: 'FIRST WEBSITE' });
})
*/

//ruta index
router.get('/', (req, res) => {
    res.render('index.html', { title: 'FIRST WEBSITE' });
});

//ruta contacto
router.get('/contacto', (req, res) => {
    res.render('contacto.html', { title: 'Contacto' });
});
//ruta registro
module.exports = router;