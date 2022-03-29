import { useRef } from "react"
const App= () =>{
  const input:any =useRef<HTMLInputElement>(null)
  const file:any =useRef<HTMLInputElement>(null)
  const submit = () => {
    console.log(input.current?.value)
    console.log(file.current?.files)
    const form = new FormData()
    form.append('archivo', file.current?.files)
    form.append('campo', input.current?.value)
    fetch('/lala', {method: 'POST', body:form})
  }
  return(
    <div>
      <div>
        <span>lala</span>
        <input type="text" name="campo" ref={input} />
        <input type="file" ref={file} />
      </div>
      <input type="submit" name="enviar" onClick={submit}/>
    </div>
  )
}

export default App