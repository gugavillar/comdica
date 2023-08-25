import { useMemo } from 'react'

import { Flex, FlexProps, Heading } from '@chakra-ui/react'

import { useCandidate } from '../../../context'

import { CandidateBox } from '.'

type ContainerProps = FlexProps

export const ContainerCandidateList = ({ ...props }: ContainerProps) => {
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
    <Flex
      align='center'
      direction='column'
      width='50%'
      {...props}
    >
      <Heading
        textAlign='center'
        fontSize='3xl'
        width='full'
        mb={4}
      >
        Lista de candidatos e respectivas votações
      </Heading>
      {sortCandidates?.map((candidate, index) => (
        <CandidateBox
          key={candidate?.id}
          candidate={candidate}
          index={index}
        />
      ))}
    </Flex>
  )
}
