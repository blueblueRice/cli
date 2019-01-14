const downloadGitRepo = require('download-git-repo')

module.exports = function(name){
  return new Promise((resolve, reject) => {
    downloadGitRepo('blueblueRice/koa-ts-template', `./${name}`, false, err => {
      if(err) reject(err)

      resolve()
    })
  })
}