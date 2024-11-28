import completionCodesCSV from '../data/completion-codes.csv?raw';

export function getRandomCompletionCode(): string {
  const codes = completionCodesCSV
    .split('\n')
    .slice(1) // Skip header row
    .filter(code => code.trim().length > 0);
  
  const randomIndex = Math.floor(Math.random() * codes.length);
  return codes[randomIndex];
}

export function validateCompletionCode(code: string): boolean {
  const codes = completionCodesCSV
    .split('\n')
    .slice(1) // Skip header row
    .filter(code => code.trim().length > 0);
  
  return codes.includes(code.trim());
}