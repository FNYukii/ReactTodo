import { generateSampleTodoContent } from '../utils/form'

type Props = {
  value: string
  onChange: (value: string) => void
  autoFocus?: boolean
  className?: string
}

function Textarea(props: Props) {
  return (
    <textarea
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={generateSampleTodoContent()}
      autoFocus={props.autoFocus}
      className={`outlined-textarea ${props.className}`}
    />
  )
}

export default Textarea
