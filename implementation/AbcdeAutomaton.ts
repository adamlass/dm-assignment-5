import Alphabet from "../interface/Alphabet";
import Automaton from "../interface/Automaton";
import LogEntry from "../interface/LogEntry";
import State from "../interface/State";
import AbcdeAlphabet from "./AbcdeAlphabet";

export default class AbcdeAutomaton implements Automaton {
    alphabet: Alphabet
    states: State[]
    initialState: State
    private transitionTable: Array<Array<State>>
    private instances: { [instanceId: string]: State }

    constructor() {
        // Defining alphabet
        this.alphabet = new AbcdeAlphabet()

        // Defining states
        this.initialState = { index: 0, isFinal: true }
        this.states = []
        this.states.push(this.initialState)
        this.states.push({ index: 1, isFinal: true })
        this.states.push({ index: 2, isFinal: false })

        // Defining transitions between states
        this.transitionTable = [
            //          A               B               C               D               E
            /*0*/[this.states[0], this.states[0], this.states[0], this.states[0], this.states[1]],
            /*1*/[this.states[0], this.states[0], this.states[0], this.states[0], this.states[2]],
            /*2*/[this.states[0], this.states[0], this.states[0], this.states[0], undefined]
        ]

        // Creating an empty object of instances
        this.instances = {}
    }

    nextState(logEntry: LogEntry): State {
        if (this.instances[logEntry.instanceId] === undefined) {
            this.instances[logEntry.instanceId] = this.initialState
        }

        const currentState: State = this.instances[logEntry.instanceId]
        const alphabetIndex: number = this.alphabet.indexOf(logEntry.actionId)
        const nextState: State = this.transitionTable[currentState.index][alphabetIndex]
        if (nextState) {
            this.instances[logEntry.instanceId] = nextState
            return nextState
        } else {
            console.error('ILLEGAL ACTION!')
            return currentState
        }
    }

    getInstances(stuckOnesOnly: boolean = false): { [instanceId: string]: State; }[] {
        let res: { [instanceId: string]: State }[] = []

        for (const instance in this.instances) {
            const state: State = this.instances[instance];
            if (stuckOnesOnly && state.isFinal) {
                continue
            }
            const obj = {}
            obj[instance] = state
            res.push(obj)
        }

        return res
    }

    getStuckInstances(): { [instanceId: string]: State; }[] {
        return this.getInstances(true)
    }

}