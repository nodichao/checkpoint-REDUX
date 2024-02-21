import { EDIT_TASK } from "../constants/actions-types";

export function editTask(payload){
    return {
            type : EDIT_TASK,
            payload
    }
}