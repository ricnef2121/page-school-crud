//creamos una constante la cual tiene la caracteristica de que
//puede ser accedida desde cualquier parte de nuestra aplicacion

const express = require('express');
const app = express();

const path = require('path')




/**seetings */
//el primer parametro es para definir una variable
//mientras que el segundo parametro corresponde al valor de la
// variable anteriormente creada
app.set('port', 3000);



//configuramos nuestro motor de plantillas para que
//reconosca los archivos html, ejs renderizara los archivos html
app.engine('html', require('ejs').renderFile);
/**el primer parametro es para el motor de vista
 * , y en el segundo parametro le decimos que motor se plantilla
 * se va utilizar
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));


/**routes */
app.use(require('./rutas/index'));








//static files





/**listening the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})