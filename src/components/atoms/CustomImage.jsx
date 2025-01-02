import PropTypes from 'prop-types';

const CustomImage = ({
  src = "",
  alt = "",
  label = "",
  className = "",
  imgClassName = "",
  labelClassName = "",
  ...props
}) => {
  return (
    <div className={`custom-image-wrapper ${className}`}>
      {label && <label className={labelClassName}>{label}</label>}
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        {...props}
      />
    </div>
  );
};

CustomImage.propTypes = {
  src: PropTypes.string.isRequired, // Source URL for the image
  alt: PropTypes.string, // Alternative text for the image
  label: PropTypes.string, // Optional label for the image
  className: PropTypes.string, // Custom class for the wrapper
  imgClassName: PropTypes.string, // Custom class for the image
  labelClassName: PropTypes.string, // Custom class for the label
};

export default CustomImage;
