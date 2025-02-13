import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'

const url =
  `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const res = await axios(`${url}&query=${searchTerm}`)
      return res.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There seems to be an error...</h4>
      </section>
    )
  }
  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No reults found... Try a different search term</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        )
      })}
    </section>
  )
}
export default Gallery
