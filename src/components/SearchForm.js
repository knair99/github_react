import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(){
        super();
    }

    handleClick2 = (event) => {
        event.preventDefault();
        this.props.handle_submission(this.searchInput.value);
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text" placeholder={'Search Github user'}
                        ref={(input) => {this.searchInput = input}}/>
                    <button onClick={this.handleClick2}>Search!</button>
                </form>
                
            </div>
        );
    }
}

SearchForm.propTypes = {};

export default SearchForm;