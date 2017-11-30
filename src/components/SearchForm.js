import React, {Component} from 'react';
import axios from 'axios';

class SearchForm extends Component {
    constructor(){
        super();
    }
    handleClick = (event) =>{
        event.preventDefault();
        let username = this.searchInput.value;

        let url = 'https://api.github.com/users/' + username;
        axios.get(url).then(
            resp => {
                console.log(resp);
                let new_card = {
                    name: resp.data.login,
                    image: resp.data.avatar_url
                };
                this.props.handle_submission(new_card);
            });

    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text" placeholder={'Search Github user'}
                        ref={(input) => {this.searchInput = input}}/>
                    <button onClick={this.handleClick}>Search!</button>
                </form>
                
            </div>
        );
    }
}

SearchForm.propTypes = {};

export default SearchForm;
