const initialState = [{
    name:"todo",
    time:new Date().toDateString()
}]

export default function (state=initialState,action){
    switch(action.type){
        case "add":
            return state.concat(action.payload);
        case "delete":
            return action.payload;
        case "save":
            return action.payload;
        default:
            return state;
    }
    
}