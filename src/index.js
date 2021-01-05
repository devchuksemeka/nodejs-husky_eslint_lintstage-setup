const express = require('express')
const app = express()

app.get('test', (req, res) => {
  return res.json({ status: true, message: 'Message shared and cleared' })
})
