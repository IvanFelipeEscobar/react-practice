const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
     <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize" >{label}</legend>
      <select
        name={name}
        defaultValue={defaultValue}
        id={name}
        className={`select select-bordered ${size}`}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </fieldset>
  )
}
export default FormSelect
