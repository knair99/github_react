import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.name} height={50} width={50}/>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

Card.propTypes = {};

export default Card;
