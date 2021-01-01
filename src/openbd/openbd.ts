import { OpenbdSchema as OpenBD } from "./openbd.schema";
export type { OpenbdSchema as OpenBD } from "./openbd.schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (arg: any): arg is string => typeof arg === "string";

export async function openbd(isbn: string | string[]): Promise<OpenBD[]> {
  const res = await fetch(
    `https://api.openbd.jp/v1/get?isbn=${
      isString(isbn) ? isbn : isbn.join(",")
    }`
  );
  return await res.json();
}
