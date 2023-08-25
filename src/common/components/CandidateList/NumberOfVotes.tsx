import { HStack, Text } from '@chakra-ui/react'

type NumberOfVotesProps = {
  votes: number
}

export const NumberOfVotes = ({ votes }: NumberOfVotesProps) => {
  return (
    <HStack
      spacing={2}
      alignSelf='end'
      fontSize='lg'
    >
      <Text>Votos:</Text>
      <Text>{votes}</Text>
    </HStack>
  )
}
