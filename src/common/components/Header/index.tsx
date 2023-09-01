import { Center, Flex, Heading, Image } from '@chakra-ui/react'

import { ACUTAL_YEAR } from '../../constants'
import { ButtonAuthenticator } from '../ButtonAuthentication'

export const Header = () => {
  return (
    <Flex
      h={20}
      width='full'
      px={6}
      align='center'
      justify='space-evenly'
      bg='gulf-blue.950'
    >
      <Center
        bg='white'
        borderRadius='full'
        px={2}
        py={1}
      >
        <Image
          maxWidth={14}
          src='/comdica_logo.png'
          alt='Logo do comdica Gravatá-PE'
        />
      </Center>
      <Heading
        color='white'
        fontSize='3xl'
      >
        Apuração da eleição de Conselheiro Tutelar {ACUTAL_YEAR}
      </Heading>
      <ButtonAuthenticator />
    </Flex>
  )
}
