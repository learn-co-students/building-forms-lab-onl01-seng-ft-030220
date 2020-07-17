import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput' 
 
class BandsContainer extends Component {
  render() {
    let bands = this.props.bands.map(band => <li key={band.id}>{band.name}</li>);
    return(
      <div>
        <BandInput 
        addBand={(band) => this.props.addBand(band)}
        />
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({type: 'ADD_BAND', band})};
};

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);
