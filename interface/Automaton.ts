import Alphabet from "./Alphabet";
import LogEntry from "./LogEntry";
import State from "./State";


export default interface Automaton {
    alphabet: Alphabet
    states: State[]
    initialState: State
    nextState(logEntry: LogEntry): State
    getStuckInstances(): { [instanceId: string]: State }[]
    getInstances(): { [instanceId: string]: State }[]

}