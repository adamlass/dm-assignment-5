

export default interface Alphabet {
    indexOf(symbol: string): number
    symbolOf(index: number): string
    size(): number
}