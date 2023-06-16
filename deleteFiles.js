import { openai } from './api.js'

async function deleteFile() {
  try {
    const response = await openai.deleteFile(process.env.TRAINING_FILE_ID)
    console.log('data: ', response.data.data)
  } catch (err) {
    console.log('error:', err)
  }
}

deleteFile()
