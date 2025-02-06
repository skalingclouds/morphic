export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'claude-3-5-sonnet-latest',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    providerId: 'anthropic'
  },
  {
    id: 'claude-3-5-haiku-20241022',
    name: 'Claude 3.5 Haiku',
    provider: 'Anthropic',
    providerId: 'anthropic'
  },
  {
    id: process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_NAME || 'undefined',
    name: process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_NAME || 'Undefined',
    provider: 'Azure',
    providerId: 'azure'
  },
  {
    id: 'accounts/fireworks/models/deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'Fireworks',
    providerId: 'fireworks'
  },
  {
    id: 'deepseek-reasoner',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    providerId: 'deepseek'
  },
  {
    id: 'deepseek-chat',
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    providerId: 'deepseek'
  },
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'Gemini 2.0 Pro (Exp)',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-thinking-exp-01-21',
    name: 'Gemini 2.0 Flash Thinking (Exp)',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'deepseek-r1-distill-llama-70b',
    name: 'DeepSeek R1 Distill Llama 70B',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: process.env.NEXT_PUBLIC_OLLAMA_MODEL || 'deepseek-r1',
    name: process.env.NEXT_PUBLIC_OLLAMA_MODEL || 'DeepSeek R1',
    provider: 'Ollama',
    providerId: 'ollama'
  },
  {
    id: 'o3-mini',
    name: 'o3-mini',
    provider: 'OpenAI',
    providerId: 'openai'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    providerId: 'openai'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    providerId: 'openai'
  },
  {
    id: process.env.NEXT_PUBLIC_OPENAI_COMPATIBLE_MODEL || 'undefined',
    name: process.env.NEXT_PUBLIC_OPENAI_COMPATIBLE_MODEL || 'Undefined',
    provider: 'OpenAI Compatible',
    providerId: 'openai-compatible'
  }
]
