import { Th, Thead, Tr } from '@chakra-ui/react'

export const HeaderTable = () => {
  return (
    <Thead>
      <Tr>
        <Th>Posição</Th>
        <Th>Candidato</Th>
        <Th>Número</Th>
        <Th isNumeric>Votos</Th>
      </Tr>
    </Thead>
  )
}
