import { Flex, DrawerBody } from '@chakra-ui/react'
import { Plus } from 'phosphor-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { FormCandidateValues } from './DrawerContainer'
import { AppendButtonFields, ContainerFields, TotalOfVotes } from '..'

export const BodyDrawer = () => {
  const { control } = useFormContext<FormCandidateValues>()

  const { fields, append, remove } = useFieldArray({
    name: 'candidates',
    control: control
  })

  const handleAppendFunction = () => append({ id: '', votes: 0 })

  const handleRemoveFunction = (index: number) => remove(index)
  return (
    <DrawerBody>
      <TotalOfVotes />
      <Flex
        mt={6}
        direction='column'
        width='full'
      >
        <AppendButtonFields
          height='fit-content'
          p={0}
          mb={4}
          alignSelf='end'
          _hover={{ bg: 'none' }}
          leftIcon={<Plus />}
          appendFunction={handleAppendFunction}
        />
        {fields.map((field, index) => (
          <ContainerFields
            key={field.id}
            index={index}
            removeFunction={() => handleRemoveFunction(index)}
          />
        ))}
      </Flex>
    </DrawerBody>
  )
}
