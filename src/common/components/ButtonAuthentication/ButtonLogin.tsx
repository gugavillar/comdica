import { useAuth0 } from '@auth0/auth0-react'
import { Button, ButtonProps } from '@chakra-ui/react'

type ButtonLoginProps = ButtonProps

export const ButtonLogin = ({ ...props }: ButtonLoginProps) => {
  const { loginWithRedirect } = useAuth0()
  const handleLogin = () => loginWithRedirect()
  return (
    <Button
      onClick={handleLogin}
      {...props}
    >
      Login
    </Button>
  )
}
