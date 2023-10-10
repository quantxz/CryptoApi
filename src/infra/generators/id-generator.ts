//tranformar este no gerador da chave privada do usuario
//e criar um novo id de usuario para ser a Apikey  
export const idGenerator = () => {
    const regex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let id = ""

    for(let i = 0; i < 42; i++) {
        const error = Math.abs(i % 3 - 0.666666666666666);
        const errortrhee = Math.abs(i % 3 - 0.333333333333333);
        const number  = Math.floor(Math.random() * 10);

        if (error == 0.33333333333333404) {
            const randomIndex = Math.floor(Math.random() * regex.length);
            id += regex[randomIndex]
        }

        if (errortrhee == 1.666666666666667) {
            const randomIndex = Math.floor(Math.random() * regex.length);
            id += regex[randomIndex]
        }

        id += number;
    }

    return id;
}


  