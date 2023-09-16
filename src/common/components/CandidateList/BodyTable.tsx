import { Tbody, Td, Tr } from '@chakra-ui/react'

import { TableContentProps } from './TableContent'

type BodyTableProps = TableContentProps

export const BodyTable = ({ sortCandidates }: BodyTableProps) => {
  return (
    <Tbody>
      {sortCandidates?.map((candidate, index) => (
        <Tr key={candidate.id}>
          <Td>{index + 1}</Td>
          <Td>{candidate.name}</Td>
          <Td textAlign='center'>
            {String(candidate.number)?.padStart(2, '0')}
          </Td>
          <Td isNumeric>{candidate?.votes}</Td>
        </Tr>
      ))}
    </Tbody>
  )
}
