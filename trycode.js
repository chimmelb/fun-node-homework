let  dao = require('./db')
async function doStuff() {
  console.log('do the stuff')
  let result = await dao.storePromise('hello')
  console.log(result)
}

doStuff()
