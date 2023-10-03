export const generateRandomHexKey = (length: number): string => {
    const characters = '0123456789ABCDEF';
    let key = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters[randomIndex];
    }
  
    return key;
}