export default (state = [], action) => {
    switch(action.type){
        case 'add':
            return [ ...state, action.name];
        default:
            return state;
    }
}