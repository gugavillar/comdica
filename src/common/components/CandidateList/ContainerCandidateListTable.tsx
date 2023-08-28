import { useMemo } from 'react'

import { Table, TableContainer } from '@chakra-ui/react'

import { BodyTable } from './BodyTable'
import { HeaderTable } from './HeaderTable'
import { useCandidate } from '../../context'

export const ContainerCandidateListTable = () => {
  const { candidates } = useCandidate()

  const sortCandidates = useMemo(
    () =>
      candidates?.sort((candidateA, candidateB) => {
        if (candidateB.votes < candidateA.votes) return -1
        if (candidateB.votes > candidateA.votes) return 1
        return 0
      }),
    [candidates]
  )

  return (
    <TableContainer
      maxWidth='70rem'
      mx='auto'
      mt={6}
      border='1px solid'
      borderColor='gray.200'
      borderRadius={8}
    >
      <Table
        variant='simple'
        size='lg'
      >
        <HeaderTable />
        <BodyTable sortCandidates={sortCandidates} />
      </Table>
    </TableContainer>
  )
}
