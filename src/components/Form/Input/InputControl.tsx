import { ComponentProps } from 'react'

type Props = ComponentProps<'input'>

export function InputControl({ ...rest }: Props) {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...rest}
    />
  )
}
