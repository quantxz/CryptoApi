//tentar entender como isso aqui ta funcionando exateamente
//ja que o tamanho da chave da aes é limitado a 256 bytes ou bits
export const generateRandomHexKey = (length: number): string => {
    const characters = '0123456789ABCDEF';
    let key = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters[randomIndex];
    }
  
    return key;
}