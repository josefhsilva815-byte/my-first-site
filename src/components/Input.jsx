function Input({classe, type, placeholder, input, value}) {
    return (
        <input 
        value={value}
        onInput={input} 
        className={classe} 
        type={type} 
        placeholder={placeholder}
        />
    )
}

export default Input