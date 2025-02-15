import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  About,
  Landing,
  Cocktail,
  Newsletter,
  Error,
  HomeLayout,
  SinglePageError,
} from './pages'
import { loader as landingLoader } from './pages/landing'
import { loader as singleCocktailLoader } from './pages/cocktail'
import { action as newsletterAction } from './pages/newsletter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
      },
    ],
  },
])

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
export default App
