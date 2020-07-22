// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'


class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>Name: </label>
            <input type="text" onChange={e => this.handleChange(e)} value={this.state.name}/>
            <input type="submit" />
          </p>
        </form>
      </div>
    )
  }
}

export default BandInput
