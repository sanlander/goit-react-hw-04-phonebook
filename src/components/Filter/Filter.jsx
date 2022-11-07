import { Input, Label } from "./Filter.modules";

export const Filter = ({ onChange }) => {
  return (
    <Label>
      Find contacts by name
      <br />
      <Input type="text" name="filter" onChange={onChange} />
    </Label>
  );
};
