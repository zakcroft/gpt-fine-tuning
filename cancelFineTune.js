import { openai } from './api.js'

async function cancelFineTune() {
  try {
    const response = await openai.cancelFineTune(process.env.FINE_TUNE_ID)
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

cancelFineTune()
