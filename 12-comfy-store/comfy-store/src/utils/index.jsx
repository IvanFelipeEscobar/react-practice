import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
})

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

export const generateAmountOptions = num => 
  Array.from({length: num}, (_, i) => {
    const amt = i + 1;
    return (
      <option key={amt} value={amt}>{amt}</option>
    )
  })
