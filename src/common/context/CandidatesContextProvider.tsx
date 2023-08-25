import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState
} from 'react'

import { v4 as uuidv4 } from 'uuid'

type Candidates = Array<{
  id: string
  name: string
  number: number
  votes: number
}>

type CandidateValuesToInsert = Pick<Candidates[number], 'id' | 'votes'>

type CandidateContextType = {
  candidates: Candidates
  setCandidates: Dispatch<SetStateAction<Candidates>>
  isUpdating: boolean
  setIsUpdating: Dispatch<SetStateAction<boolean>>
  handleInsertCandidate: (values: Array<CandidateValuesToInsert>) => void
}

const CANDIDATES_MOCK_DATA = [
  { id: uuidv4(), name: 'Candidato', number: 10, votes: 5 },
  { id: uuidv4(), name: 'Candidato', number: 18, votes: 50 },
  { id: uuidv4(), name: 'Candidato', number: 21, votes: 45 }
]

export const CandidateContext = createContext<CandidateContextType>(
  {} as CandidateContextType
)

type CandidateProviderProps = {
  children: ReactNode
}

export const CandidateProvider = ({ children }: CandidateProviderProps) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const [candidates, setCandidates] = useState<Candidates>(CANDIDATES_MOCK_DATA)

  const handleInsertCandidate = (values: Array<CandidateValuesToInsert>) => {
    values?.forEach((value) => {
      setCandidates((prevCandidates) => {
        const updatedCandidates = prevCandidates.map((candidate) =>
          candidate.id === value?.id
            ? { ...candidate, votes: candidate?.votes + value?.votes }
            : candidate
        )
        return updatedCandidates
      })
    })
  }

  const values = useMemo(
    () => ({
      handleInsertCandidate,
      isUpdating,
      setIsUpdating,
      candidates,
      setCandidates
    }),
    [candidates, isUpdating]
  )

  return (
    <CandidateContext.Provider value={values}>
      {children}
    </CandidateContext.Provider>
  )
}
