function Botao(props) {
    let classe = props.cls;
    return (
        <div className={classe}>{props.btn}</div>
    )
}

export default Botao