import { ReactNode, forwardRef } from 'react'

import {
  Flex,
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
      <Flex minH={32}>
        <FormControl
          isInvalid={!!errorMessage}
          width={56}
        >
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
      </Flex>
    )
  }
)
