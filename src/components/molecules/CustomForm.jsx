import PropTypes from 'prop-types';
import CustomInput from '../atoms/CustomInput';
import CustomImage from '../atoms/CustomImage';

const CustomForm = ({
  fields = [],
  onSubmit,
  className = "",
  buttonLabel = "Submit",
  buttonClassName = "",
}) => {
  return (
    <form className={`custom-form ${className}`} onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="form-field-wrapper">
          {field.type === 'image' ? (
            <CustomImage
              src={field.src}
              alt={field.alt || ''}
              label={field.label || ''}
              className={field.wrapperClassName || ''}
              imgClassName={field.imgClassName || ''}
              labelClassName={field.labelClassName || ''}
            />
          ) : (
            <CustomInput
              type={field.type || 'text'}
              placeholder={field.placeholder || ''}
              label={field.label || ''}
              className={field.wrapperClassName || ''}
              inputClassName={field.inputClassName || ''}
              labelClassName={field.labelClassName || ''}
              value={field.value || ''}
              onChange={field.onChange}
              name={field.name} // Pass the `name` attribute here
            />
          )}
        </div>
      ))}
      <button type="submit" className={`form-submit-button ${buttonClassName}`}>{buttonLabel}</button>
    </form>
  );
};

CustomForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'password', 'image']),
      label: PropTypes.string,
      placeholder: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
      src: PropTypes.string,
      alt: PropTypes.string,
      name: PropTypes.string, // Add name prop here
      wrapperClassName: PropTypes.string,
      inputClassName: PropTypes.string,
      imgClassName: PropTypes.string,
      labelClassName: PropTypes.string,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default CustomForm;
