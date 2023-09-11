const express = require('express');

const router = express.Router();
const DemoController = require('../controllers/blogcontrollers');
const commentController = require('../controllers/commentController.js');
const messageController = require('../controllers/messageController.js');
const portfolioController = require('../controllers/portfolioController.js');
const productController = require('../controllers/productController.js');

router.get('/undefined', (req,res)=>{
    res.status("404").end("undefined");
});


router.get('/create',DemoController.create);
router.get('/update',DemoController.update);
router.get('/delete',DemoController.delete);
router.get('/read',DemoController.read);

router.get('/create',commentController.create);
router.get('/update',commentController.update);
router.get('/delete',commentController.delete);
router.get('/read',commentController.read);

router.get('/create',messageController.create);
router.get('/update',messageController.update);
router.get('/delete',messageController.delete);
router.get('/read',messageController.read);

router.get('/create',portfolioController.create);
router.get('/update',portfolioController.update);
router.get('/delete',portfolioController.delete);
router.get('/read',portfolioController.read);

router.get('/create',productController.create);
router.get('/update',productController.update);
router.get('/delete',productController.delete);
router.get('/read',productController.read);



module.exports=router;