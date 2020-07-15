import React, { Component } from 'react'

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
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Band Name:</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          </p>
          <input type="submit" value="Add Band" />
        </form>
      </div>
    )
  }
}

export default BandInput
