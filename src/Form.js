'use strict'

const { prompt } = require('enquirer')

module.exports = async function form() {
  const formData = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'select',
      name: 'ecosystem',
      message: 'Which ecosystem is this bug for?',
      choices: ['npm', 'maven', 'pipy', 'rubygems', 'composer']
    },
    {
      type: 'input',
      name: 'module',
      message: 'Module name?'
    },
    {
      type: 'select',
      name: 'severity',
      message: 'Severity of this vulnerability?',
      choices: ['high', 'medium', 'low']
    },
    {
      type: 'input',
      name: 'description',
      message: 'Short description of the vulnerability?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Your email?'
    },
    {
      type: 'toggle',
      name: 'confirm',
      message: 'Should we submit this vulnerability report?',
      initial: 'Yep',
      enabled: 'Yep',
      disabled: 'Nope'
    }
  ])

  return formData
}
