const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
  console.log(`hello ${name}, he is ${age} age`)
})

customEmitter.emit('response', 'peter', 20)
