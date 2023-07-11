import PropTypes from "prop-types";

import FilterItem from "./components/FilterItem";
import { Container, ListFilter } from "./style";

const Filter = ({ options, title, setOptions }) => {
  const changeOptions = (value) => {
    const newOptionsState = options.map((el) => {
      if (el.value === value) {
        el.active = !el.active;
        return el;
      }
      return el;
    });
    setOptions(newOptionsState);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <ListFilter>
        {options.map((el) => (
          <FilterItem
            onChange={changeOptions}
            item={el}
          />
        ))}
      </ListFilter>
    </Container>
  );
};

export default Filter;

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setOptions: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Filter.defaultProps = {
  title: "",
};
