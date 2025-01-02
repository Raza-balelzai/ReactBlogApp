import PropTypes from 'prop-types';

const CustomInput = ({
  type = "text",
  placeholder = "",
  label = "",
  className = "",
  inputClassName = "",
  labelClassName = "",
  value = "",
  onChange,
  name, // Add name prop
  ...props
}) => {
  return (
    <div className={`custom-input-wrapper ${className}`}>
      {label && <label className={labelClassName}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        value={value}
        onChange={onChange}
        name={name} // Pass name prop to input
        {...props}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired, // Validate that name is required
};

export default CustomInput;
