import Alphabet from "../interface/Alphabet";


export default class AbcdAlphabet implements Alphabet{
    private alphabet: string[]
    
    constructor(){
        this.alphabet = ["A", "B", "C", "D"]
    }

    indexOf(symbol: string): number {
        return this.alphabet.indexOf(symbol)
    }
    symbolOf(index: number): string {
        return this.alphabet[index]
    }
    size(): number {
        return this.alphabet.length
    }

}