import { HStack, Heading } from '@chakra-ui/react'

type CandidateDataProps = {
  candidate: {
    name: string
    number: number
  }
}

export const CandidateData = ({
  candidate: { name, number }
}: CandidateDataProps) => {
  return (
    <HStack spacing={1}>
      <Heading fontSize='2xl'>{name}</Heading>
      <Heading fontSize='2xl'>{number}</Heading>
    </HStack>
  )
}
