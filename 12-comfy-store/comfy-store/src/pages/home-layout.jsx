import { Outlet, useNavigation } from 'react-router'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Loading from '../components/loading'

const HomeLayout = () => {
  const { state } = useNavigation()
  const isLoading = state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  )
}
export default HomeLayout
