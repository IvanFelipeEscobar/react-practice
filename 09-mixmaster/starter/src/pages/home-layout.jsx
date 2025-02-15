import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/navbar'

const HomeLayout = () => {
  const { state } = useNavigation()
  const isPageLoading = state === ' loading'
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  )
}
export default HomeLayout
