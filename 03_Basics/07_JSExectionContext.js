/**
 * JavaScript Exection Context 
 * 1) Global Object ---> for node {} and for browser its window 
 * 2) Function Execution Context 
 * 3) Eval Execution Context
 * 
 * Every JS file executed in 2 stages 
 * 1st phase: memory crewation phase 
 * 2nd phase: execution phase 
 * 
 * An object and a thread is created with:
 * val1 : undefined 
 * val2 : undefined 
 * val3 : undefined 
 * soon 
 * function creates its own object and thread and iternally does same thing -->new executional context and get deleted after completion of execution 
 */

/**
 * call stack for maintaining the execution contexts
 * same stack concept function pushing and popping 
 */