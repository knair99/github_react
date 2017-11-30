import React, { Component } from 'react';
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";


class App extends Component {
    constructor(){
        super();
        this.state={
          data: []
        };
    }

    handleSubmission = (new_card) => {
                this.setState({
                    data : this.state.data.concat(new_card)
                });
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

export default App;
