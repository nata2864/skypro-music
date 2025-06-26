
export const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};


export const shuffleArray = (array) => {
  const result = [...array]; 
  for (let i = result.length - 1; i > 0; i--) {
    const j = getRandomPositiveInteger(0, i); // 
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
