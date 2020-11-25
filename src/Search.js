import "./Search.css";

function Search(props) {
  const { query, updateQuery } = props;
  return (
    <input
      className="search-meetings"
      type="text"
      placeholder="search"
      value={query}
      onChange={(event) => updateQuery(event.target.value)}
    />
  );
}

export default Search;
