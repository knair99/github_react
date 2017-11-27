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
                {this.props.card_input.map(each => <Card key={each.name} {... each}/>)}
            </div>
        );
    }
}

CardList.propTypes = {};

export default CardList;
