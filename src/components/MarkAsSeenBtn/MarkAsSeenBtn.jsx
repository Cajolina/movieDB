/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { useMovieContext } from "../../context/MyMoviesContext";
import { useState } from "react";

function MarkAsSeenBtn() {
  const { addMovie } = useMovieContext();
  const [seen, setSeen] = useState("Add");
  const toggle = () => {
    setSeen(seen === "Add" ? "Remove" : "Add");
    addMovie("Movie");
  };

  return (
    <Button variant="outlined" color="inherit" onClick={toggle}>
      {seen}
    </Button>
  );
}

export default MarkAsSeenBtn;
