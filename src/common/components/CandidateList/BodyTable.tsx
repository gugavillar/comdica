import { Tbody, Td, Tr } from '@chakra-ui/react'

import { Candidates } from '../../context'

type BodyTableProps = {
  sortCandidates: Candidates
}

export const BodyTable = ({ sortCandidates }: BodyTableProps) => {
  return (
    <Tbody>
      {sortCandidates?.map((candidate, index) => (
        <Tr key={candidate.id}>
          <Td>{index + 1}</Td>
          <Td>{candidate.name}</Td>
          <Td>{candidate.number}</Td>
          <Td isNumeric>{candidate.votes}</Td>
        </Tr>
      ))}
    </Tbody>
  )
}
