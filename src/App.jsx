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
    
    
    testStyle:(<o className="" />)
  }


  return (
    <div className={stl.main}>
      <h1 className={stl.h1}>Calculadora</h1>

      <div className="grid w-1/3 h-3/6 grid-cols-4 grid-rows-6 gap-1 ">
        <Input tp="text" ph="Digite um número" cls="border border-black col-span-4"/>
        <Output tp="text" ph="Resultado" cls="border border-black bg-transparent col-span-4"/>
        <Botao btn="1" cls={`${stl.borda}`}/>
        <Botao btn="2" cls={`${stl.borda}`}/>
        <Botao btn="3" cls={`${stl.borda}`}/>
        <Botao btn="4" cls={`${stl.borda} col-start-1 row-start-4`}/>
        <Botao btn="5" cls={`${stl.borda} col-start-2 row-start-4`}/>
        <Botao btn="6" cls={`${stl.borda} col-start-3 row-start-4`}/>
        <Botao btn="7" cls={`${stl.borda} col-start-1 row-start-5`}/>
        <Botao btn="8" cls={`${stl.borda} col-start-2 row-start-5`}/>
        <Botao btn="9" cls={`${stl.borda} col-start-3 row-start-5`}/>
        <Botao btn="0" cls={`${stl.borda} col-start-2 row-start-6`}/>

        <Botao btn="+" cls={`${stl.borda} col-start-2 row-start-2`}/>
        <Botao btn="-" cls={`${stl.borda} col-start-3 row-start-2`}/>
        <Botao btn="/" cls={`${stl.borda} col-start-4 row-start-3`}/>
        <Botao btn="x" cls={`${stl.borda} col-start-4 row-start-4`}/>
        <Botao btn="." cls={`${stl.borda} col-start-1 row-start-6`}/>
        <Botao btn="%" cls={`${stl.borda} col-start-3 row-start-6`}/>

        <Botao btn="Del" cls={`${stl.borda} col-start-4 row-start-2`}/>
        <Botao btn="C"   cls={`${stl.borda} col-start-1 row-start-2`}/>
        <Botao btn="="   cls={`${stl.borda} col-start-4 row-start-5 row-end-7`}/>
      </div>
    </div>
  )
}

export default App