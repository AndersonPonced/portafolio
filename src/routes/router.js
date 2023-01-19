const express = require('express');
const router = express.Router();

// const customerContoller = require('../controllers/customerController');


router.get('/', ( req, res)=>{

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM fresh', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
    
    })


    router.post('/', ( req, res)=>{

        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
            
    
            conn.query('INSERT INTO fresh set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('Enhorabuena!!!!')
            })
        })
        
        })
    

// router.get('/', customerContoller.list)

// router.post('/add', customerContoller.save)

// router.get('/delete/:id', customerContoller.delete)

// router.get('/update/:id', customerContoller.edit)
// router.post('/update/:id', customerContoller.update)
module.exports = router