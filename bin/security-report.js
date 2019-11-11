#!/usr/bin/env node

const Form = require('../src/Form')
const Avatars = require('../src/AnalystsAvatars').avatars
console.log(Avatars[0])

async function main() {
  await Form()
}

main().catch(error => {
  console.error()
  console.error(`oh sweet lord, sorry about that!`)
  console.error(`something failed: ${error.message}`)
})
