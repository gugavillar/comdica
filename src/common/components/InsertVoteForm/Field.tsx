import { ReactNode, forwardRef } from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps
} from '@chakra-ui/react'

type FieldProps = InputProps & {
  label: string
  errorMessage: string | undefined
  iconField: ReactNode
}

export const Field = forwardRef(
  ({ label, iconField, errorMessage, ...props }: FieldProps, ref) => {
    return (
      <FormControl isInvalid={!!errorMessage}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <InputLeftElement>{iconField}</InputLeftElement>
          <Input
            {...props}
            ref={ref}
          />
        </InputGroup>
        {errorMessage ? (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        ) : null}
      </FormControl>
    )
  }
)
