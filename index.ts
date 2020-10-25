
import AbcdeAutomaton from "./implementation/AbcdeAutomaton";
import LogEntry from "./interface/LogEntry";
import State from "./interface/State";
import logs from "./logs"


const automaton = new AbcdeAutomaton()

function run() {
    for (const logEntry of logs) {
        console.log('------------Processing Log------------')
        console.log(logEntry)
        const state = automaton.nextState(logEntry)
        console.log('NEW STATE:', state.index, "- TYPE: A", state.isFinal ? "FINAL" : "NON FINAL", "STATE")
    }
    console.log('--------------------------------------')
    console.log('Getting instances')
    const instances: { [instanceId: string]: State }[] = automaton.getInstances()
    console.log(instances)
    console.log('--------------------------------------')
    console.log('Getting stuck instances')
    const stuckInstances: { [instanceId: string]: State }[] = automaton.getStuckInstances()
    console.log(stuckInstances)
    console.log('--------------------------------------')
}


run()