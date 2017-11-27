import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="" height={50} width={50}/>
                <div>{this.props.name}</div>
            </div>
        );
    }
}

Card.propTypes = {};

export default Card;
