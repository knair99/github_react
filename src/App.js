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

    handleSubmission = (username) =>{
        let url = 'https://api.github.com/users/' + username;
        axios.get(url).then(
            resp => {
                console.log(resp);
                let new_card =  {
                    name: resp.data.login,
                    image: resp.data.avatar_url
                };
                this.setState({
                    data : this.state.data.concat(new_card)
                });
            });


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
