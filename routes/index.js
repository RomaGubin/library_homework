const express = require('express')
const router = express.Router()

router.get('/api/books/:id/download', (req, res) => {
  const {id, fileBook} = req
  res.json({fileBook})
})

module.exports = router