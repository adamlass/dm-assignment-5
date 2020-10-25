import Alphabet from "./Alphabet";
import State from "./State";


export default interface Automaton {
    alphabet: Alphabet
    states: State[]
    initialState: State
    nextState(state: State, symbol: string)
}