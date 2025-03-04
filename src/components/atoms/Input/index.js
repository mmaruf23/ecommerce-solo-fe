export default function Input({label, text , placeholder = ""}) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="font-semibold" htmlFor={label}>{text}</label>
      <input className="border rounded py-2 px-3 focus:outline-red-500" type="text" name={label} id={label} placeholder={placeholder} />
    </div>
  )
};
