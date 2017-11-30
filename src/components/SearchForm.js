import React, {Component} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as fetchActions from '../actions/add_action'

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

    handleClick2 = (event) => {
        this.props.action.addToCards(this.searchInput.value);
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

function mapStateToProps(state){
    return{
        name: state.fetchData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(fetchActions, dispatch)
    }
}

SearchForm.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps) (SearchForm);