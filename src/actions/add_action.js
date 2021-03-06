import axios from 'axios'

export const addToCardsSuccess = (data) => {
    return {
        type: 'add',
        data
    }
}


export const addToCards = (username) => {
    return (dispatch) => {
        let url = 'https://api.github.com/users/' + username;
        return axios.get(url).then(
            response => {
                let image = response.data.avatar_url;
                let name = response.data.login;
                dispatch(addToCardsSuccess({name, image}));
            }
        );
    }
}