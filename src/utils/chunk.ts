// Take an array of items and chunk the items into a matrix.
// Useful for offset based pagination.
export function chunk<T>(items: T[], size: number): T[][] {
  // initialize the matrix
  const chunks: T[][] = [];

  // For loop
  // Loop until i is more then the length of the items available.
  // Increment i by the given chunk size.
  // Each iteration copy push targeted chunk from the passed items to chunks array.
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  // return the matrix
  return chunks;
}

// Example: https://www.typescriptlang.org/play?#code/PTAEBUEMGsFNUgOwQJxZAnqA9gM1AJYAusAtgM4KIAmoAxgBYCui0oRD8xZlBiR2BKFKQiKAgA8AdACgQoAKrlYuJgBtQubChy5cyoqABGkZbQAOkAOZ9RBbIlmrEdIveSMW0ADzgAfAAU3BQAXBAA2gC6ADSg5AQAXrBhiEykRrAoAJRh4FFRoADeMqCg8nzEBJBqifAc8CJikiX0DuSGnqzkufmRoAC8oFEA3DIt8gBi2qBq2Njm42AAMnPmoCxuGgSElKTadZzI9TOwiFYcuuychCQUCABukARqkEZqsLKl8gCSLihkp0M2yMWGONnup3ozFYcVqnzKYAAopBGDdMnYHK1zFhzExyAx2JAUFZYCRaJ02LgUNhSFd4JZyGY0XcBFCvJQiegMPCtDoAu8gQNQAAGYaEUDeZnkKTvM4cMXbADUg3iSSyRRapQp0tx+KCt2l5BqdFgQViSthaqyo1KAF8xl8wP8iEwUEdro1xBIWs7XR5odByKN7TI6G1DFpBINELAAO6gACCaEwAQATMKslJcM81AEAORTbB5rJjMOIcjYd4y7BWAIUgKR2IAViyWSAA