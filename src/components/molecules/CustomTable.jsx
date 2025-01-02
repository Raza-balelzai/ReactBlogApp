import PropTypes from "prop-types";

const CustomTable = ({ columns, data }) => {
    return (
      <div className="table-responsive" style={{ maxHeight: "350px" }}>
        <table className="table table-bordered">
          <thead className="table-light sticky-top">
            <tr>
              {columns.map((column) => (
                <th key={column.key} style={{ width: column.width || "auto" }}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  No data available.
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={row.id || rowIndex}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {column.render
                        ? column.render(row[column.key], row, rowIndex) // Call the render function if provided
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

// Define PropTypes for validation
CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired, // Column header
      key: PropTypes.string.isRequired, // Key to fetch data from rows
      width: PropTypes.string, // Optional column width
      className: PropTypes.string, // Optional class for styling
      render: PropTypes.func, // Optional custom rendering function
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Array of data objects
  title: PropTypes.string, // Optional title for the table
};

export default CustomTable;
