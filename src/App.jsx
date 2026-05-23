import { useState } from "react";
import Botao from "./components/Botao.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";

function App() {
  const stl = {
    main:`
      flex bg-blue-100 w-screen h-screen flex-col pt-8 items-center
    `,
    h1:`
      text-3xl font-bold text-center mb-12
    `,
    borda: `
      border border-black
    `,
    botao: `
      flex items-center justify-center rounded-lg
    `,
    
    
    testStyle:(<o 
      className='
        text-opacity-100
      '
    />)
  }

  const [value, setValue] = useState("");

  function handclick(input) {
    const {value} = input.target;
    setValue(value);
  }

  return (
    <div className={stl.main}>
      <h1 className={stl.h1}>Calculadora</h1>

      <div className="grid w-1/3 h-3/6 grid-cols-4 grid-rows-6 gap-1 ">
        <Input input={(e) => handclick(e)} type="text" placeholder="Digite" classe={`
          rounded-lg
          flex
          h-full
          text-left 
          p-2 
          col-start-1 
          col-end-5 
          row-start-1 
          outline-none 
          ${stl.borda}
        `}/>
        <Output out={value} classe={`
          opacity-40
          self-end 
          pr-2 
          pb-2 
          text-end 
          h-6 
          bg-transparent 
          col-start-1 
          col-end-5 
          row-start-1
        `}/>

        <Botao ctn="1" classe={`${stl.botao} ${stl.borda}`}/>
        <Botao ctn="2" classe={`${stl.botao} ${stl.borda}`}/>
        <Botao ctn="3" classe={`${stl.botao} ${stl.borda}`}/>
        <Botao ctn="4" classe={`${stl.botao} ${stl.borda} col-start-1 row-start-4`}/>
        <Botao ctn="5" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-4`}/>
        <Botao ctn="6" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-4`}/>
        <Botao ctn="7" classe={`${stl.botao} ${stl.borda} col-start-1 row-start-5`}/>
        <Botao ctn="8" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-5`}/>
        <Botao ctn="9" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-5`}/>
        <Botao ctn="0" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-6`}/>

        <Botao ctn="+" classe={`${stl.botao} ${stl.borda} col-start-2 row-start-2`}/>
        <Botao ctn="-" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-2`}/>
        <Botao ctn="/" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-3`}/>
        <Botao ctn="x" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-4`}/>
        <Botao ctn="." classe={`${stl.botao} ${stl.borda} col-start-1 row-start-6`}/>
        <Botao ctn="%" classe={`${stl.botao} ${stl.borda} col-start-3 row-start-6`}/>

        <Botao ctn="Del" classe={`${stl.botao} ${stl.borda} col-start-4 row-start-2`}/>
        <Botao ctn="C"   classe={`${stl.botao} ${stl.borda} col-start-1 row-start-2`}/>
        <Botao ctn="="   classe={`${stl.botao} ${stl.borda} col-start-4 row-start-5 row-end-7`}/>
      </div>
    </div>
  )
}

export default App