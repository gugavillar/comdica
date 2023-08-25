import { Fragment } from 'react'

import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import { Plus } from 'phosphor-react'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'

import { AppendButtonFields } from './AppendButtonFields'
import { ContainerFields } from './ContainerFields'
import { ContainerFooterForm } from './ContainerFooterForm'
import { useCandidate } from '../../context'
import { candidateResolver } from '../../validations'

export type FormValues = {
  candidates:
    | Array<{
        id: string
        votes: number
      }>
    | undefined
}

export const ContainerForm = () => {
  const { handleInsertCandidate } = useCandidate()
  const methods = useForm<FormValues>({
    resolver: candidateResolver,
    defaultValues: {
      candidates: [{ id: '', votes: 0 }]
    },
    mode: 'onBlur'
  })

  const { fields, append, remove } = useFieldArray({
    name: 'candidates',
    control: methods.control
  })

  const handleAppendFunction = () => append({ id: '', votes: 0 })

  const handleRemoveFunction = (index: number) => remove(index)

  const onSubmit = (data: FormValues) => {
    handleInsertCandidate(data?.candidates as [])
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Flex
        direction='column'
        width='50%'
      >
        <Heading
          textAlign='center'
          width='full'
          fontSize='3xl'
          mb={4}
        >
          Cadastro de votos dos candidatos
        </Heading>
        <AppendButtonFields
          width={32}
          p={0}
          alignSelf='end'
          _hover={{ bg: 'none' }}
          leftIcon={<Plus />}
          appendFunction={handleAppendFunction}
        />
        <Box
          as='form'
          onSubmit={methods.handleSubmit(onSubmit)}
          p={4}
        >
          <VStack
            align='flex-start'
            width='full'
            spacing={6}
          >
            {fields.map((field, index) => (
              <Fragment key={field.id}>
                <ContainerFields
                  removeFunction={() => handleRemoveFunction(index)}
                  index={index}
                />
              </Fragment>
            ))}
          </VStack>
          <ContainerFooterForm />
        </Box>
      </Flex>
    </FormProvider>
  )
}
