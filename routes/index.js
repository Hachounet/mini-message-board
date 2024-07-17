const express = require('express')

const messages = [
    {
        text: 'Hi there !',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
]

const router = express.Router()

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Mini Messageboard', messages })
})

router.get('/new', (req, res) => {
    res.render('form', { title: 'Send a message' })
})

router.post('/new', (req, res) => {
    const { messageText, pseudoText } = req.body
    messages.push({ text: messageText, user: pseudoText, added: new Date() })
    res.redirect('/')
})

module.exports = router
