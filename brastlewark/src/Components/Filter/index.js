import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import {GnomeContext} from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
    backgroundColor: "#fff",
    borderRadius: 20
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "#282a36",
    color: "#fff"
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const {chipData, handleClick} =useContext(GnomeContext);
  return (
    <Paper className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <Chip
            size="small"
            key={data.key}
            icon={icon}
            label={data.label}
            onClick={handleClick(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}