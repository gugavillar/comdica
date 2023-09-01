import { useAuth0 } from '@auth0/auth0-react'
import { Button, ButtonProps } from '@chakra-ui/react'

type ButtonLoginProps = ButtonProps

export const ButtonLogout = ({ ...props }: ButtonLoginProps) => {
  const { logout } = useAuth0()

  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } })

  return (
    <Button
      onClick={handleLogout}
      {...props}
    >
      Logout
    </Button>
  )
}
