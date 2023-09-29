/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FAUNA_KEY: string
  readonly VITE_AUTH0_CLIENT_ID: string
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_USER_PERMITTED: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
