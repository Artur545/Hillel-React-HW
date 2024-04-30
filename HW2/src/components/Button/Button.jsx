const Button = (props) => {
    const { type, text = "Default", onClick } = props;

    // const handleClickButton = (e) => {
    //     console.log("Click");
    // }

    return (
        <button type={type} onClick={onClick}>{text}</button>
    )
}

export default Button;