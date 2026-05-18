function Output(props) {
    const {cls, tp, ph} = props;
    return (
        <input className={cls} type={tp} placeholder={ph}/>
    )
}

export default Output