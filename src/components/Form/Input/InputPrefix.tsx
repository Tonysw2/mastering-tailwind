import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export function InputPrefix({ ...rest }: Props) {
  return <div {...rest} />
}
