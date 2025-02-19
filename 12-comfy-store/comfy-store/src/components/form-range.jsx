import { useState } from "react"
import { formatPrice } from "../utils"

const FormRange = ({ label, name, size, price }) => {
  const step = 1000
  const maxPrice = 100000
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)

  return (
    <fieldset>
      <legend className="fieldset-legend cursor-pointer">
        <span className="capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </legend>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary w-full ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </fieldset>
  )
}
export default FormRange