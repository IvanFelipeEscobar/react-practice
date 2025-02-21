import { Form, Link, redirect, useNavigate } from 'react-router'
import FormInput from '../components/form-input'
import SubmitBtn from '../components/submit-btn'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import { loginUser } from '../features/user-slice'
import { useDispatch } from 'react-redux'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
      const res = await customFetch.post('/auth/local', data)
      store.dispatch(loginUser(res.data))
      toast.success('Welcome, ' + res.data.user.username)
      return redirect('/')
    } catch (error) {
      const msg =
        error.response.data?.error.message || 'Please check credentials'
      toast.error(msg)
      return null
    }
  }

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const guestUserLogin = async () => {
    try {
      const res = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      dispatch(loginUser(res.data))
      toast.success('Welcome, ' + res.data.user.username)
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('guest user login error.please try later.')
    }
  }
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold capitalize">login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase" onClick={guestUserLogin}>
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Login
