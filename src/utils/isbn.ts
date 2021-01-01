export function isValidISBN(code: string): boolean {
  return isValidISBN10(code) || isValidISBN13(code);
}

export function isValidISBN10(code: string): boolean {
  const isbn = code.replace(/(\s+|-)/g, "");
  if (10 !== isbn.length) {
    return false;
  }
  return caluculateISBN10CheckDegit(isbn.substring(0, 9)) === isbn[9];
}

export function isValidISBN13(code: string): boolean {
  const isbn = code.replace(/(\s+|-)/g, "");
  if (13 !== isbn.length || isbn.substring(0, 3) !== "978") {
    return false;
  }
  return caluculateISBN13CheckDegit(isbn.substring(0, 12)) === isbn[12];
}

export function convertToISBN10(code: string): string {
  const isbn = code.replace(/(\s+|-)/g, "");
  if (isValidISBN10(code)) {
    return isbn;
  }
  if (!isValidISBN13(code)) {
    throw `not valid isbn ISBN:${isbn}`;
  }
  const isbn10base = isbn.substring(3, 12);
  return `${isbn10base}${caluculateISBN10CheckDegit(isbn10base)}`;
}

export function convertToISBN13(code: string): string {
  const isbn = code.replace(/(\s+|-)/g, "");
  if (isValidISBN13(code)) {
    return isbn;
  }
  if (!isValidISBN10(code)) {
    throw `not valid isbn ISBN:${isbn}/${code}`;
  }
  const isbn10base = isbn.substring(3, 12);
  return `${isbn10base}${caluculateISBN10CheckDegit(isbn10base)}`;
}

function caluculateISBN10CheckDegit(isbn10base: string): string {
  const checkDegitNum =
    11 -
    Array.from(isbn10base).reduce(
      (previous, current, i) =>
        (previous + parseInt(current, 10) * (10 - i)) % 11,
      0
    );
  switch (checkDegitNum) {
    case 10:
      return "X";
    case 11:
      return "0";
    default:
      return String(checkDegitNum);
  }
}

function caluculateISBN13CheckDegit(isbn13base: string): string {
  return String(
    10 -
      Array.from(isbn13base).reduce(
        (previous, current, i) =>
          (previous + parseInt(current, 10) * (0 == i % 2 ? 1 : 3)) % 10,
        0
      )
  );
}
