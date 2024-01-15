import Button from "./Button.jsx"

export default function Panel ({clickHandle}) {
   const handleClick = nameButton => clickHandle(nameButton)

   return (
      <div className="buttons">
         <Button name="AC" clickHandle={handleClick} gray/>
         <Button name="+/-" clickHandle={handleClick} gray/>
         <Button name="%" clickHandle={handleClick} gray/>
         <Button name="/" clickHandle={handleClick} painted/>

         <Button name="7" clickHandle={handleClick}/>
         <Button name="8" clickHandle={handleClick}/>
         <Button name="9" clickHandle={handleClick}/>
         <Button name="x" clickHandle={handleClick} painted/>

         <Button name="4" clickHandle={handleClick}/>
         <Button name="5" clickHandle={handleClick}/>
         <Button name="6" clickHandle={handleClick}/>
         <Button name="-" clickHandle={handleClick} painted/>

         <Button name="1" clickHandle={handleClick}/>
         <Button name="2" clickHandle={handleClick}/>
         <Button name="3" clickHandle={handleClick}/>
         <Button name="+" clickHandle={handleClick} painted/>

         <Button name="0" clickHandle={handleClick} double/>
         <Button name="." clickHandle={handleClick}/>
         <Button name="=" clickHandle={handleClick} painted/>
      </div>
   )
}