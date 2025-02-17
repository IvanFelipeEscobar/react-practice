import { useNavigation } from 'react-router'

const SubmitBtn = ({ text }) => {
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'
  return (
    <button type="subimt" className="btn btn-primary btn-block uppercase" disabled={isSubmitting}>
      {isSubmitting ? <span className='loading loading-spinner'/> : text}
    </button>
  )
}
export default SubmitBtn
