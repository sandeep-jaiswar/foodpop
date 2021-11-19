import {Input} from "antd";
import {useState, useEffect} from "react";
import useDebounce from "../../../hooks/useDebounce";
import PropTypes from "prop-types";
import {ApiCore} from "../../../services/api/core";

/**
 * Description
 * @param {any} props
 * @returns {any}
 */
function InputLocation(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        new ApiCore({
          get: true,
          url: `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${debouncedSearchTerm}`,
          cb: (results) => {
            props.setResults(results);
          },
        });
      } else {
        props.setResults([]);
      }
    },
    [debouncedSearchTerm], // Only call effect if debounced search term changes
  );
  return (
    <Input
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Enter area, street name ..."
      bordered={false}
    />
  );
}

InputLocation.propTypes = {
  setResults: PropTypes.func,
};

export default InputLocation;
