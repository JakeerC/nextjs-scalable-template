import PropTypes from 'prop-types';

const BaseTemplate = ({ text }) => <div className="">{text}</div>;

BaseTemplate.propTypes = {
  text: PropTypes.string,
};
BaseTemplate.defaultProps = {
  text: 'sample default text',
};

export default BaseTemplate;
