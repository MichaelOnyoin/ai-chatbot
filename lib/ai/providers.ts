import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { createAzure} from '@ai-sdk/azure';

// export const myProvider = isTestEnvironment
//   ? customProvider({
//       languageModels: {
//         'chat-model-small': chatModel,
//         'chat-model-large': chatModel,
//         'chat-model-reasoning': reasoningModel,
//         'title-model': titleModel,
//         'artifact-model': artifactModel,
//       },
//     })
//   : customProvider({
//       languageModels: {
//         'chat-model-small': openai('gpt-4o-mini'),
//         'chat-model-large': openai('gpt-4o'),
//         'chat-model-reasoning': wrapLanguageModel({
//           model: fireworks('accounts/fireworks/models/deepseek-r1'),
//           middleware: extractReasoningMiddleware({ tagName: 'think' }),
//         }),
//         'title-model': openai('gpt-4-turbo'),
//         'artifact-model': openai('gpt-4o-mini'),
//       },
//       imageModels: {
//         'small-model': openai.image('dall-e-2'),
//         'large-model': openai.image('dall-e-3'),
//       },
//     });

const apiKey = process.env.AZURE_OPENAI_API_KEY; // Define your API key here
const resourceName = process.env.AZURE_RESOURCE_NAME; // Define your Azure resource name here
const apiVersion = "2024-05-01-preview"; 

const azure = createAzure({
     
  apiVersion: apiVersion, // Azure API version
  baseURL: 'https://ai-moonyoingaipa589005681748.openai.azure.com/openai/deployments', // Azure base URL
  resourceName: resourceName, // Azure resource name
  apiKey: apiKey, // Azure API key
});


export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'gpt-35-turbo': chatModel,
        'gpt-35-turbo-16k': chatModel,
        'gpt-4o-mini': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'gpt-35-turbo': azure('gpt-35-turbo'),
        'gpt-35-turbo-16k': azure('gpt-35-turbo-16k'),
        'gpt-4o-mini': azure('gpt-4o-mini'),
        'chat-model-reasoning': wrapLanguageModel({
          model: fireworks('accounts/fireworks/models/deepseek-r1'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': azure('gpt-35-turbo'),
        'artifact-model': azure('gpt-4o-mini'),
      },
      imageModels: {
        'small-model': azure.imageModel('dall-e-3'),
        //'large-model': openai.image('dall-e-3'),
      },
    });
