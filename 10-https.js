const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to homepage')
  } else if (req.url === '/about') {
    res.write('about')
  } else {
    res.write(`
  <h1>Opp!</h1>
  <p>some thing went wrong</p>
  <a href="/">back to home</a>
  `)
  }

  res.end()
})

server.listen(5000)
