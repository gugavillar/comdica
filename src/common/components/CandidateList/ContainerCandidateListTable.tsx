import { useMemo } from 'react'

import { Table, TableContainer } from '@chakra-ui/react'
import { useQuery } from 'react-query'

import { TableContent } from './TableContent'
import { getAllCandidates } from '../../../services/candidate'
import { CircularLoader } from '../Loader'

export const ContainerCandidateListTable = () => {
  const { data, isLoading } = useQuery('candidates', getAllCandidates, {
    staleTime: Infinity
  })

  const sortCandidates = useMemo(
    () =>
      data?.data?.sort((candidateA, candidateB) => {
        if (
          candidateB.data?.votes.reduce((acc, value) => acc + value, 0) <
          candidateA.data?.votes.reduce((acc, value) => acc + value, 0)
        )
          return -1
        if (
          candidateB.data?.votes.reduce((acc, value) => acc + value, 0) >
          candidateA.data?.votes.reduce((acc, value) => acc + value, 0)
        )
          return 1
        return 0
      }),
    [data]
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
      {isLoading ? (
        <CircularLoader circularProps={{ size: 40 }} />
      ) : (
        <Table
          variant='simple'
          size='lg'
        >
          <TableContent sortCandidates={sortCandidates} />
        </Table>
      )}
    </TableContainer>
  )
}
