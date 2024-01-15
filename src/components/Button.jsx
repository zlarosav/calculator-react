export default function Button({ clickHandle, name, painted, double, gray }) {
   const handleClick = () => clickHandle(name);
 
   // Crear una cadena de clases solo si painted o double son true
   const buttonClasses = `${painted ? "bg-orange" : ""}${double ? " double" : ""}${gray ? " bg-gray" : ""}`;
 
   return (
     <>
       <button onClick={handleClick} className={buttonClasses.trim() || undefined}>{name}</button>
     </>
   );
}