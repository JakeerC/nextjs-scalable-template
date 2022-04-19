import PropTypes from 'prop-types';

const Paper = ({ children, className }) => (
  <div
    className={`bg-slate-100 p-4 m-4 rounded-md shadow-md text-slate-900 dark:bg-slate-900 dark:text-slate-200  ${className}`}
  >
    {children}
  </div>
);

Paper.propTypes = {
  children: PropTypes.oneOfType[(PropTypes.string, PropTypes.element)],
  className: PropTypes.string,
};
Paper.defaultProps = {
  children: 'sample default text',
};

export default Paper;
