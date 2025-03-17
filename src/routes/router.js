import  { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Inicio'});
})

router.get('/servicios', (req, res) => {
    res.render('servicios', {title: 'Servicios'});
})

export default router;