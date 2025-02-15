import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/search-form'
import CocktailList from '../components/cocktail-list'
import { useQuery } from '@tanstack/react-query'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCocktails = (term) => {
  return {
    queryKey: ['search', term || 'all'],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${term}`)
      return data.drinks
    },
  }
}

export const loader = 
(queryClient) => 
async ({ request }) => {
  const reqUrl = new URL(request.url)
  let search = reqUrl.searchParams.get('search')
  if (!search) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    search = alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  await queryClient.ensureQueryData(searchCocktails(search))
  return { search }
}

const Landing = () => {
  const { search } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktails(search))
  return (
    <>
      <SearchForm search={search} />
      <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing
