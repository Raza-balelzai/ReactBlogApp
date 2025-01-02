import PropTypes from 'prop-types';

const Header = ({ title, subtitle,note }) => {
    return (
      <section className="bg-light py-5 shadow-sm border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="display-4 text-primary fw-bold mb-3">{title}</h1>
              <p className="text-secondary fs-5">
                {note} <span className="fw-semibold">{subtitle}</span> .
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  Header.propTypes = {
    title: PropTypes.string.isRequired,  // title is required and must be a string
    subtitle: PropTypes.string.isRequired, // subtitle is required and must be a string
    note: PropTypes.string

  };
 
  export default Header;
  