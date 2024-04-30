const Input = (props) => {

    const handleChangeInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <input type="text" onChange={handleChangeInput} placeholder={props.placeholder} />
    )
}

export default Input;