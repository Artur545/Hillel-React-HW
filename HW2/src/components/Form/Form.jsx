const Form = () => {

    const handleSubmitForm = (e) => {
        e.prevent.default;
        console.log('Submit');
    }

    return (
        <form type='submit' oncClick={handleSubmitForm}>Form</form>
    )
}

export default Form;