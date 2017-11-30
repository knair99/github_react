import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";

class CardList extends Component {
    constructor(){
        super(); //To get the this prop
    }
    render() {
        return (
            <div>
                {this.props.card_input.map( (each, idx) => <Card key={idx} {... each}/>)}
            </div>
        );
    }
}

CardList.propTypes = {};

export default CardList;
