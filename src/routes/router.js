import  { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Barberia');
})

export default router;