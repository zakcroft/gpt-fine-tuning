import { openai } from './api.js'

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel("are you sure??")
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()
