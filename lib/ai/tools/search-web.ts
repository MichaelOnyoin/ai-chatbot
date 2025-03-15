import { tool } from 'ai'
import { z } from 'zod'

export const searchInternet = tool({
    description: 'Search the internet for the latest and most recent information',
    parameters: z.object({
      query: z.string().describe('the question or query to search on the internet'),
    }),
    execute: async ({ query }) => {
      const BRAVE= process.env.BRAVE_API;
      const response = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=1&extra_snippets=true`, {
        headers: {
          'Accept': '*/*',
          'Accept-Encoding': 'gzip',
          'X-Subscription-Token': `${BRAVE}`
        },
        
      });

      const searchData = await response.json();
      
      return searchData;
      
    },
})


