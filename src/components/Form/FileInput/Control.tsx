'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type Props = ComponentProps<'input'>

export function Control({ multiple = false, ...rest }: Props) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      {...rest}
    />
  )
}
