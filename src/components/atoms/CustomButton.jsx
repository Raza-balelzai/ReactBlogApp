import PropTypes from "prop-types";

function CustomButton({ onClick, className, children, ...rest }) {
  return (
    <button
      className={`btn ${className || "btn-primary"}`} // Default class
      onClick={onClick}
      {...rest} // Spread any additional attributes like 'type', 'disabled', etc.
    >
      {children} {/* Render the content inside the button */}
    </button>
  );
}

// Define the PropTypes for better clarity
CustomButton.propTypes = {
  onClick: PropTypes.func, // Event handler for button click
  className: PropTypes.string, // Additional classes for styling
  children: PropTypes.node.isRequired, // Content inside the button (e.g., text or icons)
};



export default CustomButton;
