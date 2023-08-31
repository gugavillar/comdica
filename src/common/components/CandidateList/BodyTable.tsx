import { Tbody, Td, Tr } from '@chakra-ui/react'

import { TableContentProps } from './TableContent'

type BodyTableProps = TableContentProps

export const BodyTable = ({ sortCandidates }: BodyTableProps) => {
  const countingVotes = (votes: Array<number>) =>
    votes.reduce((acc, value) => value + acc, 0)

  return (
    <Tbody>
      {sortCandidates?.map((candidate, index) => (
        <Tr key={candidate?.ref?.value?.id}>
          <Td>{index + 1}</Td>
          <Td>{candidate.data?.name}</Td>
          <Td>{candidate.data?.number}</Td>
          <Td isNumeric>{countingVotes(candidate?.data?.votes)}</Td>
        </Tr>
      ))}
    </Tbody>
  )
}
