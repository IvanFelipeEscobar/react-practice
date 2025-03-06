import { type PropsWithChildren } from 'react'

// type Props = {
//   name: string
//   id: number
//   children?: React.ReactNode
// }
type Props = PropsWithChildren<{ name: string; id: number }>
function Component({ name, id, children }: Props) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>id: {id}</h2>
      {children}
    </div>
  )
}
export default Component
