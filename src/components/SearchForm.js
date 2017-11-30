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



    }

    handleClick2 = (event) => {
        event.preventDefault();
        this.props.action.addToCards(this.searchInput.value);
        console.log(this.props.data.image);
        this.props.handle_submission(this.props.data);
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
        data: state.fetchData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(fetchActions, dispatch)
    }
}

SearchForm.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps) (SearchForm);