import {
  CircularProgress,
  CircularProgressProps,
  Flex,
  FlexProps
} from '@chakra-ui/react'

type CircularLoaderProps = FlexProps & {
  circularProps?: CircularProgressProps
}

export const CircularLoader = ({
  circularProps,
  ...props
}: CircularLoaderProps) => {
  return (
    <Flex
      width='full'
      align='center'
      my={6}
      height={64}
      {...props}
    >
      <CircularProgress
        isIndeterminate
        color='green.300'
        mx='auto'
        {...circularProps}
      />
    </Flex>
  )
}
