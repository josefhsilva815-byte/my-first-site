import { useState } from "react";
import Botao from "./components/Botao.jsx";

function App() {
  const style = {
    main:`
      flex bg-blue-100 w-screen h-screen flex-col pt-8 items-center
    `,
    h1:`
      text-3xl font-bold text-center mb-12
    `,
    
    
    test:(<o className="border-red-50" />)
  }


  return (
    <div className={style.main}>
      <h1 className={style.h1}>Calculadora</h1>

      <div className="grid w-1/3 h-3/6 grid-cols-4 grid-rows-5 gap-1">
        <input type="text" className="border border-black col-span-4"/>
        <Botao btn="0" cls="border border-black col-span-3 row-start-5"/>
        <Botao btn="1" cls="border border-black "/>
        <Botao btn="2" cls="border border-black "/>
        <Botao btn="3" cls="border border-black "/>
        <Botao btn="4" cls="border border-black col-start-1 row-start-3"/>
        <Botao btn="5" cls="border border-black col-start-2 row-start-3"/>
        <Botao btn="6" cls="border border-black col-start-3 row-start-3"/>
        <Botao btn="7" cls="border border-black col-start-1 row-start-4"/>
        <Botao btn="8" cls="border border-black col-start-2 row-start-4"/>
        <Botao btn="9" cls="border border-black col-start-3 row-start-4"/>

        <Botao btn="+" cls="border border-black "/>
        <Botao btn="-" cls="border border-black "/>
        <Botao btn="/" cls="border border-black "/>
        <Botao btn="x" cls="border border-black "/>
      </div>
    </div>
  )
}

export default App