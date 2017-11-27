import React, {Component} from 'react';
import axios from 'axios';

class SearchForm extends Component {
    constructor(){
        super();
    }
    handleClick = (event) =>{
        event.preventDefault();
        let username = this.searchInput.value;
        this.props.handle_submission(username);

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
