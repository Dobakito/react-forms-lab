import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charLeft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    }, () => {
      this.setState({
        charLeft: this.state.charLeft - this.state.message.length,
      })
    }
  );
  }
  // ^ passes test but doesnt work how it should due to the nature
  // of how "onChange" updates the state.

  render() {
    return (
      <div>
        <strong>{this.state.charLeft} Characters left</strong>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          type="text"
          name="message"
          id="message"/>
      </div>
    )
  }
}

export default TwitterMessage;
