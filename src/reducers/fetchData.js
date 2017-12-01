import axios from 'axios';

export default (state = {
}, action) => {
    switch(action.type){
        case 'add':
            console.log(action.data);
            return action.data;
        default:
            return state;
    }
}