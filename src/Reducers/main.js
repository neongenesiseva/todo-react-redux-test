const initialState = [{
    name:"todo",
    time:new Date().toDateString()
}]

export default function (state=initialState,action){
    switch(action.type){
        case "add":
            return state.concat(action.payload);
        case "delete":
            console.log("accessed delete");
            return action.payload;
    }
    
    return state
}