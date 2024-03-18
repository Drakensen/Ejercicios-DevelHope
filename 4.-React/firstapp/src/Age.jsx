function Age ({ age= 31 }) {
    if (age >= 18) {
    return (
        <p>Your age is { age }</p>
    )} else {
        return (
            <p>You are very young!</p>
        )
    }
}

export default Age