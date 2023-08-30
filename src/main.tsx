import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App } from './App'
import { CandidateProvider } from './common/context'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <CandidateProvider>
          <App />
        </CandidateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
