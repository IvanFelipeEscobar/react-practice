import { Form, Link, redirect } from 'react-router'
import SubmitBtn from '../components/submit-btn'
import FormInput from '../components/form-input'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/local/register', data)
    toast.success('Account created succesfully!')
    return redirect('/login')
  } catch (error) {
    const msg = error.response.data.error.message || 'Please check credentials'
    toast.error(msg)
    return null
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold capitalize">register</h4>
        <FormInput type="text" label="name" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already have an account??
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Register
