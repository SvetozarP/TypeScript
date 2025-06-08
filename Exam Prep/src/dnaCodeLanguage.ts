import { Language } from "./contracts/language";

export class DNACodeLanguage implements Language {
  private readonly _charset: Set<'A' | 'C' | 'G' | 'T'> = new Set(['A', 'C', 'G', 'T']);

  public get charset(): Set<'A' | 'C' | 'G' | 'T'> {
    return this._charset;
  }

  public isCompatibleToCharset(message: string): boolean {
    for (const char of message) {
      if (!this._charset.has(char as 'A' | 'C' | 'G' | 'T')) {
        return false;
      }
    }
    return true;
  }
}