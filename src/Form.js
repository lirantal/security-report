/* eslint-disable security/detect-object-injection */
'use strict'

const qs = require('querystring')
const http = require('https')
const { prompt } = require('enquirer')

module.exports = class Form {
  constructor() {
    this.formData = null
  }

  async formQuestions() {
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

    this.formData = formData
    return formData
  }

  static getFieldNameById(id) {
    const fieldMapping = {
      79: 'Your Name',
      68: 'Ecosystem',
      70: 'Module name',
      77: 'Severity',
      81: 'Email',
      82: 'Description',
      84: 'Description',
      113: 'Description'
    }

    return fieldMapping[id]
  }

  submit() {
    const options = {
      method: 'POST',
      hostname: 'snyk.io',
      port: null,
      path: '/wp-admin/admin-ajax.php',
      headers: {
        referer: 'https://snyk.io/vulnerability-disclosure/',
        'content-type': 'application/x-www-form-urlencoded',
        'cache-control': 'no-cache'
      }
    }

    return new Promise((resolve, reject) => {
      const request = http.request(options, function(response) {
        const chunks = []

        response.on('data', function(chunk) {
          chunks.push(chunk)
        })

        response.on('end', function() {
          const responseData = Buffer.concat(chunks)
          return resolve(JSON.parse(responseData))
        })

        response.on('error', function(error) {
          return reject(error)
        })
      })

      request.write(
        qs.stringify({
          frm_action: 'create',
          form_id: '6',
          _wp_http_referer: '/vulnerability-disclosure/',
          'item_meta[67]': String(this.formData.name),
          'item_meta[68]': String(this.formData.ecosystem),
          'item_meta[70]': String(this.formData.module),
          'item_meta[77][]': String(this.formData.severity).toUpperCase(),
          'item_meta[81]': this.formData.email,
          action: 'frm_entries_create',
          'item_meta[84]': String(this.formData.description),
          'item_meta[82]': String(this.formData.description),
          'item_meta[113]': String(this.formData.description)
        })
      )
      request.end()
    })
  }
}
