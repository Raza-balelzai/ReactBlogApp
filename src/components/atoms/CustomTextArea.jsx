import PropTypes from 'prop-types';

const CustomTextarea = ({
  placeholder = "",
  label = "",
  className = "",
  textareaClassName = "",
  labelClassName = "",
  value = "",
  onChange,
  ...props
}) => {
  return (
    <div className={`custom-textarea-wrapper ${className}`}>
      {label && <label className={labelClassName}>{label}</label>}
      <textarea
        placeholder={placeholder}
        className={textareaClassName}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

CustomTextarea.propTypes = {
  placeholder: PropTypes.string, // Placeholder for textarea
  label: PropTypes.string, // Optional label for the textarea
  className: PropTypes.string, // Custom class for the wrapper
  textareaClassName: PropTypes.string, // Custom class for the textarea
  labelClassName: PropTypes.string, // Custom class for the label
  value: PropTypes.string, // Value of the textarea
  onChange: PropTypes.func.isRequired, // Function to handle onChange event
};

export default CustomTextarea;
