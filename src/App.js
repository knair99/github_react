import React, { Component } from 'react';
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";
import axios from 'axios';


class App extends Component {
    constructor(){
        super();
        this.state={
          data: []
        };
    }

    handleSubmission = (new_data) =>{
        this.setState({
            data : this.state.data.concat(new_data)
        });
        console.log(this.state.data);
    }
  render() {
    return (
      <div>
          <h1>
              <SearchForm handle_submission={this.handleSubmission}/>
              <CardList card_input={this.state.data}/>
          </h1>
      </div>
    );
  }
}

export default App;
