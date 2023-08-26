import { forwardRef } from 'react'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps
} from '@chakra-ui/react'

type FieldProps = SelectProps & {
  label: string
  errorMessage: string | undefined
  options: Array<{
    labelOption: string
    valueOption: string | number
  }>
}

export const SelectField = forwardRef(
  ({ label, errorMessage, options, ...props }: FieldProps, ref) => {
    return (
      <Flex minH={[20, 20, 20, 32]}>
        <FormControl
          isInvalid={!!errorMessage}
          width={['full', 'full', 'full', 56]}
        >
          <FormLabel>{label}</FormLabel>
          <Select
            {...props}
            ref={ref}
          >
            {options?.map(({ labelOption, valueOption }) => (
              <option
                key={valueOption}
                value={valueOption}
              >
                {labelOption}
              </option>
            ))}
          </Select>
          {errorMessage ? (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          ) : null}
        </FormControl>
      </Flex>
    )
  }
)
