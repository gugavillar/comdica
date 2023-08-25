import { Flex, Heading, VStack } from '@chakra-ui/react'

import { CandidateData } from './CandidateData'
import { NumberOfVotes } from './NumberOfVotes'

type CandidateBoxProps = {
  candidate: {
    number: number
    name: string
    votes: number
  }
  index: number
}

export const CandidateBox = ({ candidate, index }: CandidateBoxProps) => {
  return (
    <Flex
      align='flex-start'
      justify='space-between'
      p={4}
      minWidth={48}
      gap={2}
    >
      <Heading fontSize='2xl'>{index + 1} -</Heading>
      <VStack align='flex-start'>
        <CandidateData candidate={candidate} />
        <NumberOfVotes votes={candidate.votes} />
      </VStack>
    </Flex>
  )
}
