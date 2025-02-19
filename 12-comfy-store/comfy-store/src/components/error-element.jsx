import { useRouteError } from "react-router"

const ErrorElement = () => {
    const {status} = useRouteError()
console.log(status)
  return (
    <h4 className="font-bold text-4xl">there was an error...</h4>
  )
}
export default ErrorElement