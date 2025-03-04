export default function Button({ children,className, onClick = ()  => {}}) {
  return (
    <button onClick={onClick} className={`${className} px-4 py-2 rounded-lg`}>
      {children}
    </button>
  );
};
