import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal:ft-lens-protocol-1686907932088-2023-06-16-09-40-56',
      prompt: 'What is Lens Protocol',
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices =======: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()
