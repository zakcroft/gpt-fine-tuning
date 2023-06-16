## GPT Fine-Tuning

This project show how to easily fine-tune a GPT data model. This codebase goes along with the tutorial located [here](https://nader.substack.com/p/supercharge-your-gpt-model-custom).

### Prerequisites

To follow along with this tutorial, you’ll need to have the following installed on your machine:

- Python
- Node.js

You’ll also need an OpenAI API Key. You can get one at [https://openai.com](https://openai.com).

### Getting started

First, clone the repo and install the dependencies:

```
npm install # or yarn
```

Next, set the environment variable for your OpenAI API Key in a .env file:

```
OPENAI_KEY=sk-...

On updates...
TRAINING_FILE_ID=file-...
TRAINED_MODEL_NAME=file-...
FINE_TUNE_ID=...
```

### Running the app

First, upload the file with the example or custom data set to OpenAI:

```sh
node uploadFile.js
```

Next, use the File ID that is logged out to create a new fine tune based on davinci by updating the `training_file` in `createFineTune.js`.

Finally, create the fine tune:

```sh
node createFineTune.js
```

### Listing your Fine Tunes

Once the fine tune is created, it will take some time to process. We can get the status of the fine tune, as well as the model ID, by calling the listFineTunes API method.

```sh
node listFineTunes.js
```

### Testing it out

Now that the fine tune has processed and our. new model is ready, we can try it out.

Open createCompletion.js. Here, update the fine_tuned_model value with your model name.

Next, run the script:

```sh
node createCompletion.js
```

### Notes
 Seems to cost about 2 dollars to train

 You can ony fine tune davinci, ada, babbage and curie
```
 davinci:ft-personal:lens-protocol-2023-06-16-10-04-35
 72,224 trained tokens
 Yikes!
```

