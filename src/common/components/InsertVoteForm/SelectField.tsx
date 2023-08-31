import { forwardRef } from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps
} from '@chakra-ui/react'

type FieldProps = SelectProps & {
  label: string
  errorMessage: string | undefined
  options:
    | Array<{
        labelOption: string
        valueOption: string | number
      }>
    | undefined
}

export const SelectField = forwardRef(
  ({ label, errorMessage, options, ...props }: FieldProps, ref) => {
    return (
      <FormControl isInvalid={!!errorMessage}>
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
    )
  }
)
