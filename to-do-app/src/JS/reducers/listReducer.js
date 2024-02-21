import { ADD_TASK,EDIT_TASK } from "../constants/actions-types";

const initialState = 
    [
        
            {
                id : 1,
                description : 'ma premiere tache',
                isDone : false
            },{
                id : 2,
                description : 'ma deuxieme tache',
                isDone : true
            }
        ];

       


export function listReducer(state=initialState, action){
   switch (action.type){
    case ADD_TASK:
        return (
                [...state, action.payload]
                 );
    case EDIT_TASK:
            let newList = [];
            state.map(
                task=>{
                    if(task.id ===action.payload.id){
                        task.id = action.payload.id;
                        task.description = action.payload.description;
                        task.isDone = action.payload.isDone;
                    }
                    newList.push(task);
                }
            );
            return newList;
    default : 
    return state
   }
}