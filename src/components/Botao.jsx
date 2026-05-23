function Botao({classe, ctn, click}) {
    return (
        <button 
        onClick={click} 
        className={classe}
        >
            {ctn}
        </button>
    )
}

export default Botao