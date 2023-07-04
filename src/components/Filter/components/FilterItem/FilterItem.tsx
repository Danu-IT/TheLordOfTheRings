import { styled } from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { yellow } from "@mui/material/colors";

interface FilterItemProps {
  item: DataRace;
  onChange: (value: string) => void;
}

const FilterItem = ({ item, onChange }: FilterItemProps) => {
  return (
    <Container>
      <FormControlLabel
        onChange={() => onChange(item.value)}
        checked={item.active}
        control={
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: yellow[600],
              },
            }}
          />
        }
        label={item.value}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default FilterItem;
