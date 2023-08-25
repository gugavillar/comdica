import { useContext } from 'react'

import { CandidateContext } from './CandidatesContextProvider'

export const useCandidate = () => {
  const context = useContext(CandidateContext)

  if (context === undefined) {
    throw new Error('useCandidate must be used with a provider')
  }

  return context
}
