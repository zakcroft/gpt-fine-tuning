import { openai } from './api.js'

async function listFiles() {
  try {
    const response = await openai.listFiles()
    console.log('data: ', response.data.data)
  } catch (err) {
    console.log('error:', err)
  }
}

listFiles()
