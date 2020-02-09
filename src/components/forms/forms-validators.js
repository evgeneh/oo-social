export const required = value => {

    if (value && value.length > 0) {
        return undefined
    }
    return "Field is required"
}

export const minLength = (minlength) => (value) => {
    if (value && value.length < minlength) {
        return `field must consist more ${minlength} symbols`
    }
    return undefined
}

//оющая ошибка для формы с подтверждением пароля
export const validate = values => {

    if ( values.password === values.password2)
        return undefined
    else
        return {password2: 'Passwords confirm is not valid'}

}