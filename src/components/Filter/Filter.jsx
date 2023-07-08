import { styled } from "styled-components";
import FilterItem from "./components/FilterItem";
import PropTypes from "prop-types";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const ListFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

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
