import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'
import { CandidateProvider } from './common/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <CandidateProvider>
        <App />
      </CandidateProvider>
    </ChakraProvider>
  </React.StrictMode>
)
