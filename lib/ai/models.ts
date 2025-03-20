//export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';
export const DEFAULT_CHAT_MODEL: string = 'gpt-35-turbo';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

// export const chatModels: Array<ChatModel> = [
//   {
//     id: 'chat-model-small',
//     name: 'Small model',
//     description: 'Small model for fast, lightweight tasks',
//   },
//   {
//     id: 'chat-model-large',
//     name: 'Large model',
//     description: 'Large model for complex, multi-step tasks',
//   },
//   {
//     id: 'chat-model-reasoning',
//     name: 'Reasoning model',
//     description: 'Uses advanced reasoning',
//   },
// ];

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-35-turbo',
    name: 'Gpt-3.5-turbo',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-35-turbo-16k',
    name: 'Gpt-3.5-turbo 16k',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o-mini',
    name: 'Gpt-4o-mini',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
