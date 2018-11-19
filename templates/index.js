'use strict'

const fs = require('fs')
const { promisify } = require('util')
const readDirPromise = promisify(fs.readdir)
const readFilePromise = promisify(fs.readFile)

const getTemplateNamesByType = async (path, type) => {
  try {
    const directoryList = await readDirPromise(`${__dirname}/${path}`)
    let names = directoryList.filter(filename => {
      if (filename.split('.')[1] === type) {
        return filename
      }
    })
    return { path, names }
  } catch (e) {
    throw e
  }
}

const loadTemplates = async ({ path, names }) => {
  try {
    let result = {}
    for (let name of names) {
      let content = await readFilePromise(`${__dirname}/${path}/${name}`, { encoding: 'utf8' })
      result[name.split('.')[0]] = content
    }
    return result
  } catch (e) {
    throw e
  }
}

module.exports.loadTemplates = async (path, type) => {
  let result = await loadTemplates(await getTemplateNamesByType(path, type))
  return result
}
