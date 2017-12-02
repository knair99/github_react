import axios from 'axios';

export default (state = {
}, action) => {
    switch(action.type){
        case 'add':
            console.log('Reducer: ');
            console.log(state);
            return [...state,
                Object.assign({}, action.data)];
        default:
            return state;
    }
}