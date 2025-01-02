import Spinner from "../alerts/Spinner";
const LoadingScreen = () => {
    return (
      <div className="loading-overlay">
        <div className="loading-content">
          <h1 className="shiny-text">Blogosphere</h1>
          <Spinner />
        </div>
      </div>
    );
  };
  export default LoadingScreen