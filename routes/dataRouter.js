const router = require('express').Router()

// Get all historical data from log
router.get('/all', (req,res) => {
    // Blah
    console.log(`dataRouter __dirname:
${__dirname}`)
})

module.exports = router;