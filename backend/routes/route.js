// Dependencies
const express = require("express")
const router = express.Router()


// Routes
router.get("/", async (req, res) => {
    try {
        res.send("live")
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;