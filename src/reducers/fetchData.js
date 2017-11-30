export default (state = [], action){
    switch(action){
        case add:
            return [ ...state, action.name];
        default:
            return state;
    }
}