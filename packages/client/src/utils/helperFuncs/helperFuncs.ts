const queryInputFormatter = (input: string): string => {
  const splittedInput = input.split('');
  const firstLetterUpper = splittedInput[0].toUpperCase();
  const remainingLettersLower = splittedInput.slice(1).map(letter => letter.toLocaleLowerCase()).join('');
  return firstLetterUpper + remainingLettersLower;
};

const helperFuncs = {
  queryInputFormatter
};

export default helperFuncs;