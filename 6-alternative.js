module.exports.items = ['item1', 'item2']

const person = {
  name: 'bob',
}

module.exports.handleData = () => {
  const count = 0

  const increment = () => {
    return count + 1
  }

  const decrement = () => {
    return count - 1
  }

  return {
    count,
    increment,
    decrement,
  }
}

module.exports.singlePerson = person
