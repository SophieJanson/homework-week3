import * as React from 'react'

export default class WordGuesser extends React.PureComponent {
  state = {}

  render() {
    return (<form onSubmit={this.props.handleSubmit}>
      <label>
        Title:
        <input type="text" name="userInput" value={this.state.userInput} onChange={this.props.handleChange} maxLength="1" />
      </label>
      <button type="submit">Guess</button>
    </form>)
  }
}
