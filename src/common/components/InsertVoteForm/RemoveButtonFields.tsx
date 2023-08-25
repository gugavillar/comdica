import { Button, ButtonProps } from '@chakra-ui/react'

type RemoveButtonFieldsProps = ButtonProps & {
  removeFunction: () => void
}

export const RemoveButtonFields = ({
  removeFunction,
  ...props
}: RemoveButtonFieldsProps) => {
  return (
    <Button
      fontSize='sm'
      variant='ghost'
      onClick={removeFunction}
      {...props}
    >
      Remover
    </Button>
  )
}
