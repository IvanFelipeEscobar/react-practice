const FormCheckbox = ({label, name, defaultValue, size}) => {
  return (
    <fieldset className="mx-auto flex justify-center">
      <legend className="fieldset-legend capitalize cursor-pointer">
        {label}
      </legend>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </fieldset>
  )
}
export default FormCheckbox