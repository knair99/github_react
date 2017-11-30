import axios from 'axios';

export default (state = {
    name: 'knair99',
    image: 'https://avatars3.githubusercontent.com/u/36804?v=4'
}, action) => {
    switch(action.type){
        case 'add':
            console.log('fetching');
            let username = action.name;
            let url = 'https://api.github.com/users/' + username;
            axios.get(url).then(
                resp => {
                    console.log(resp);
                    let new_card = {
                        name: resp.data.login,
                        image: resp.data.avatar_url
                    };
                    return {
                        ...state,
                    new_card
                    }
                });
            ;
        default:
            return state;
    }
}