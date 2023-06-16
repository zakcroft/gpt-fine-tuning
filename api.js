import { Configuration, OpenAIApi } from 'openai'
import { config } from 'dotenv';
config({ path: '.env.local' });


const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey,
})

console.log(process.env.OPENAI_KEY);
export const openai = new OpenAIApi(configuration)
