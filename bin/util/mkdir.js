const mkdirp = require('mkdirp')

module.exports = function (name) {
  return new Promise((resolve, reject) => {
    mkdirp(`./${name}`, function (err) {
      if (err) reject(err)

      resolve()
    })
  })
}