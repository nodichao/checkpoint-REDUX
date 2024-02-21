import { ADD_TASK } from "../constants/actions-types";

export function addTask(payload){
    return {
            type : ADD_TASK,
            payload
    }
}