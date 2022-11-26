const express = require('express');
const router = express.Router();

//dummy route...
router.get('/dummy', async(req, res,next) =>{
    res.status(200).json({
        status:'app is working...'
    })
})
module.exports = router