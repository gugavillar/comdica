import { Button, ButtonProps } from '@chakra-ui/react'

type AppendButtonFieldsProps = ButtonProps & {
  appendFunction: () => void
}

export const AppendButtonFields = ({
  appendFunction,
  ...props
}: AppendButtonFieldsProps) => {
  return (
    <Button
      fontSize='sm'
      variant='ghost'
      onClick={appendFunction}
      {...props}
    >
      Adicionar
    </Button>
  )
}
