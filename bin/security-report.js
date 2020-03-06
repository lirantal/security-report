#!/usr/bin/env node
/* eslint-disable security/detect-object-injection */

const Form = require('../src/Form')
const Avatars = require('../src/AnalystsAvatars').avatars

function getRandomAvatar(Avatars) {
  const max = Avatars.length
  const randomAvatarItem = Math.floor(Math.random() * max)

  return Avatars[randomAvatarItem]
}

async function main() {
  console.log(getRandomAvatar(Avatars))

  const form = new Form()

  // prompt for questions
  await form.formQuestions()

  const { errors } = await form.submit()
  if (errors && errors.length === 0) {
    console.log('Submitted!')
  } else {
    const error = new Error('form error')
    error.validation = errors
    throw error
  }
}

main().catch(error => {
  console.error()
  console.error(`oh no!`)
  if (error.validation) {
    for (const validationId of Object.keys(error.validation)) {
      console.error(` - ${Form.getFieldNameById(validationId)}: ${error.validation[validationId]}`)
    }
  } else {
    console.error(`something failed: ${error.message ? error.message : 'aborting'}`)
  }
})
