import { Th, Thead, Tr } from '@chakra-ui/react'

export const HeaderTable = () => {
  return (
    <Thead>
      <Tr height={16}>
        <Th
          textTransform='capitalize'
          fontSize='md'
        >
          Posição
        </Th>
        <Th
          textTransform='capitalize'
          fontSize='md'
        >
          Candidato
        </Th>
        <Th
          textTransform='capitalize'
          fontSize='md'
          textAlign='center'
        >
          Número
        </Th>
        <Th
          isNumeric
          textTransform='capitalize'
          fontSize='md'
        >
          Votos
        </Th>
      </Tr>
    </Thead>
  )
}
