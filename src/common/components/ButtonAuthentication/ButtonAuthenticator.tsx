import { useAuth0 } from '@auth0/auth0-react'
import { Flex, FlexProps } from '@chakra-ui/react'

import { ButtonLogin } from './ButtonLogin'
import { ButtonLogout } from './ButtonLogout'
import { buttonsProps } from '../..'

type ContainerButtonsProps = FlexProps

export const ButtonAuthenticator = ({ ...props }: ContainerButtonsProps) => {
  const { isAuthenticated, isLoading } = useAuth0()
  return (
    <Flex
      gap={4}
      align='center'
      justify='center'
      {...props}
    >
      {isAuthenticated ? (
        <ButtonLogout
          isLoading={isLoading}
          {...buttonsProps}
        />
      ) : (
        <ButtonLogin
          isLoading={isLoading}
          {...buttonsProps}
        />
      )}
    </Flex>
  )
}
