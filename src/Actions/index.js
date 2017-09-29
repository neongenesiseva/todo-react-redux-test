
import {store} from '../index';

export function Add(item){
    return {
        type:"add",
        payload:item
    }
};

export function Delete(index){
    let currentState = store.getState().main.slice();
    //getState() will return a reference of the current Store
        currentState.splice(index,1);
    return {
        type:"delete",
        payload:currentState
    }
}

export function SaveEdit(item,index){
    let currentState=store.getState().main.slice();
        currentState[index] = item;
    let modifiedState = currentState.slice();
    return {
        type:"save",
        payload:modifiedState
    }
}

