function Input({classe, type, placeholder, input}) {
    return (
        <input 
        onInput={input} 
        className={classe} 
        type={type} 
        placeholder={placeholder}
        />
    )
}

export default Input