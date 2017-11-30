import axios from 'axios';

export default (state = {
}, action) => {
    switch(action.type){
        case 'add':
            console.log(action.data);
            let newdata = action.data;
            return newdata;
        default:
            return state;
    }
}