import { MouseEvent, useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
];

export const Index = () => {
  const [fragment, setFragment] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setFragment(e.target.value);
  };

  const handleRemoveFragment = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
      <Select
        value={fragment}
        onChange={handleChange}
        autoWidth
        label="Choose Category"
      >
        {topFilms.map((name) => (
          <MenuItem className="flex" key={name.title} value={name.title}>
            <IconButton
              onClick={handleRemoveFragment}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <ListItemText primary={name.title} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
