const products = require('../data/journal.json')

function first() {
  return new Promise((resolve, reject)=> {
    resolve(products)
})
}
module.exports={first}
