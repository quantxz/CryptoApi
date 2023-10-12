export const privateKeyGenerator = () => {

    const regex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567[]´`/|\;.,><çÇ'!@#$%¨&*()_-+=}{"
    let privateKey = ""

    for(let i = 0; i < 230; i++) {
        const error = Math.abs(i % 3 - 0.666666666666666);
        const errortrhee = Math.abs(i % 3 - 0.333333333333333);
        const number  = Math.floor(Math.random() * 10);

        if (error == 0.33333333333333404) {
            const randomIndex = Math.floor(Math.random() * regex.length);
            privateKey += regex[randomIndex]
        }

        if (errortrhee == 1.666666666666667) {
            const randomIndex = Math.floor(Math.random() * regex.length);
            privateKey += regex[randomIndex]
        }

        privateKey += number;
    }

    return privateKey;
}