const router = require('express').Router()

// Get all historical data from log
router.get('/all', (req,res) => {
    // Blah
    res.json({msg: 'Hello'})
})

module.exports = router;