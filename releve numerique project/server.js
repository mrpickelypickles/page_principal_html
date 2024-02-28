const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')

const app = express()
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false
}))

app.use(express.static(path.join(__dirname, 'releve_numerique_project','public')))
app.set('views', path.join(__dirname, 'releve_numerique_project','public' ,'views'))
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
  console.log('see Homepage')
  res.render('index')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const allowedUsers = {
    admin: 'password'
  }

  if (allowedUsers[username] === password) {
    req.session.username = username;
    res.redirect('/acueille')
  } else {
    const error = 'Invalid username or password'
    res.render('index', { error })
  }
})

app.get('/acueille', (req, res) => {
  if (req.session.username) {
    res.render('acueille', { username: req.session.username })
  } else {
    res.redirect('/')
  }
})


app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

app.get('/dashboard', (req, res) => {
  if (req.session.username) {
    res.render('dashboard', { username: req.session.username })
  } else {
    res.redirect('/')
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})