import { useEffect, useCallback, useState, useContext } from "react";
import apiService from "../../services/ApiService";
import { LoadingContext } from "../../contexts/LoadingContext";
import CustomTable from "../molecules/CustomTable";

function AdminTags() {
  const { setLoading } = useContext(LoadingContext);
  const [tags, setTags] = useState([]); // State for all tags
  const [tagName, setTagName] = useState(""); // State for form input
  const [displayName, setDisplayName] = useState(""); // State for form input

  // Fetch tags function
  const fetchTags = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiService.get(
        import.meta.env.VITE_GETALLTAGS_URL
      ); // Fetch tags from backend
      setTags(response.data); // Update tags state
    } catch (error) {
      console.error("Failed to load tags", error);
    } finally {
      setLoading(false);
    }
  }, [setLoading]);
  useEffect(() => {
    fetchTags();
  }, [fetchTags]);
  // Add new tag
  const handleAddTag = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newTag = { tagName, displayName };
      await apiService.post(import.meta.env.VITE_ADDTAG_URL, newTag); // Add tag to backend
      fetchTags(); // Refresh tags
      setTagName("");
      setDisplayName("");
    } catch (error) {
      console.error("Failed to add tag", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete tag
  const handleDelete = async () => {
    setLoading(true);
    try {
      await apiService.delete(import.meta.env.VITE_DELETETAG_URL);
      fetchTags(); // Refresh tags
    } catch (error) {
      console.error("Failed to delete tag", error);
    } finally {
      setLoading(false);
    }
  };

  // Define columns for the table
  const columns = [
    {
      header: "#",
      key: "index",
      width: "10%",
      render: (value, row, rowIndex) => rowIndex + 1,
    },
    {
      header: "Tag Name",
      key: "name",
      width: "30%",
      render: (value) => (
        <div className="cell-scroll">{value}</div> // Wrap long text in a scrollable div
      ),
    },
    {
      header: "Display Name",
      key: "displayName",
      width: "40%",
      render: (value) => (
        <div className="cell-scroll">{value}</div> // Wrap long text in a scrollable div
      ),
    },
    {
      header: "Actions",
      key: "actions",
      width: "20%",
      render: (value, row) => (
        <>
          <button
            className="btn btn-sm btn-primary me-2"
            onClick={() => console.log("Edit", row)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Section: Form */}
        <div className="col-md-4">
          <form onSubmit={handleAddTag}>
            <div className="mb-3">
              <label htmlFor="tagName" className="form-label">
                Tag Name
              </label>
              <input
                type="text"
                className="form-control"
                id="tagName"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="displayName" className="form-label">
                Display Name
              </label>
              <input
                type="text"
                className="form-control"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Tag
            </button>
          </form>
        </div>

        {/* Right Section: Table */}
        <div className="col-md-8">
          <CustomTable data={tags} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default AdminTags;