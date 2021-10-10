import React, { Component } from "react";
import PropTypes from "prop-types";

class Text extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h3>{text}</h3>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Text.defaultProps = {
  text: "이건 기본 text props입니다.",
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
