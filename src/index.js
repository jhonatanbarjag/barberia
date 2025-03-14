import express from 'express';//para crear el servidor
import morgan from 'morgan';//para ver las peticiones que se hacen al servidor
import {dirname, join} from 'path'; //para obtener la ruta del directorio actual
import {fileURLToPath} from 'url'; //para obtener la ruta del archivo actual
import router from './routes/router.js';//para importar las rutas

const app = express();

//para obtener la ruta del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// middleware para ver las peticiones que se hacen al servidor
app.use(morgan('dev'));

//para servir archivos estaticos
app.set('views', join(__dirname, 'views'));

//configuracion de motor de plantillas ejs
app.set('view engine', 'ejs');

// Servir archivos estáticos (CSS, imágenes, JS)
app.use(express.static(join(__dirname, 'public')));

// Middleware para manejar datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//para usar las rutas
app.use(router);



app.listen(3000)

console.log('Server running at http://localhost:3000/');