#!/usr/bin/env node
const program = require('commander')
const mkdir = require('./util/mkdir')
const download = require('./util/download')

program
  .command('m <project-name>')
  .description('init project for local')
  .action(async function (name) {
    try{
      await mkdir(name)
      console.log('创建成功')
    }catch(e){
      console.error(e)
    }
  })

program
  .command('d <project-name>')
  .description('download the koa-ts-template')
  .action(async function (name) {
    try{
      await download(name)
      console.log('下载成功')
    }catch(e){
      console.error(e)
    }
  })


program
  .command('init <project-name>')
  .description('download the koa-ts-template')
  .action(async function (name) {
    try {
      await mkdir(name)
      console.log('创建成功')
      await download(name)
      console.log('下载成功')
    } catch (e) {
      console.error(e)
    }
  })

program.parse(process.argv)