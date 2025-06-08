import { Language } from "./contracts/language";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Cipher } from "./contracts/cipher";

type ProcessType = 'Encoded' | 'Decoded' | 'Both';

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

export class LanguageMessageEncoder<
    TLang extends Language,
    TCipher extends Cipher<TLang>
    > extends PartialMessageEncoder {
    private encodedCount = 0;
    private decodedCount = 0;

    constructor(language: TLang, cipher: TCipher) {
        super(language, cipher);
    }


    protected override stripForbiddenSymbols(message: string): string {
        const forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(symbol => {
            const escapedSymbol = symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(escapedSymbol, 'g');
            message = message.replace(regex, '');
        });
            return message;
    }

    public override encodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return 'No message.';
        }

        const cleanMessage = this.stripForbiddenSymbols(secretMessage);
        if (!this.language.isCompatibleToCharset(cleanMessage)) {
            return 'Message not compatible.';
        }

        const encoded = this.cipher.encipher(cleanMessage);
        this.encodedCount += cleanMessage.length;
            return encoded;
    }

    public override decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return 'No message.';
        }

        if (!this.language.isCompatibleToCharset(secretMessage)) {
            return 'Message not compatible.';
        }

        const decoded = this.cipher.decipher(secretMessage);
        this.decodedCount += decoded.length;
            return decoded;
    }

    public override totalProcessedCharacters(type: ProcessType): string {
        let total = 0;
        if (type === 'Encoded') total = this.encodedCount;
        else if (type === 'Decoded') total = this.decodedCount;
        else if (type === 'Both') total = this.encodedCount + this.decodedCount;

        return `Total processed characters count: ${total}`;
    }

    protected get language(): TLang {
        return super['language'] as TLang;
    }

    protected get cipher(): TCipher {
        return super['cipher'] as TCipher;
    }
}