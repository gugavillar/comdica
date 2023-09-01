import React from 'react'
import ReactDOM from 'react-dom/client'

import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App } from './App'
import { theme } from './theme/theme'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ChakraProvider
        theme={theme}
        toastOptions={{
          defaultOptions: {
            position: 'top-right',
            duration: 2500,
            isClosable: true,
            variant: 'top-accent'
          }
        }}
      >
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
)
