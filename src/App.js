import React, { Component } from 'react';
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as fetchActions from './actions/add_action'


class App extends Component {
    constructor(){
        super();
        this.state={
          data: []
        };
    }

    handleSubmission = (username) => {
        this.props.action.addToCards(username).then(() => {
            this.setState({
                data : this.state.data.concat(this.props.stuff)
            });
        });
        console.log(this.props.stuff);

    }

  render() {
    return (
      <div>
              <SearchForm handle_submission={this.handleSubmission}/>
              <CardList card_input={this.state.data}/>
      </div>
    );
  }
}


function mapStateToProps(state){
    return{
        stuff: state.fetchData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(fetchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

